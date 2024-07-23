import bcrypt from "bcrypt";
import Auth from "../models/auth.model.js";
import { sendSuccessResponse } from "../utils/res.utils.js";
import { sendErrorResponse } from "../utils/error.utils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// REGISTER FUNCTION

export const register = async (req, res) => {
    try {
        const { email, password, username, role } = req.body;

        if (!email || !password || !username || !role) {
            return sendErrorResponse(res, 400, "All fields are required");
        }

        // Check if user already exists
        const existingUser = await Auth.findOne({
            $or: [{ email }, { username }],
        });
        if (existingUser) {
            return sendErrorResponse(
                res,
                400,
                "User with this email or username already exists"
            );
        }

        // Hash the password
        const salt = await bcrypt.genSalt(parseInt(process.env.JOB_SALT_ROUND));
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new Auth({
            email,
            password: hashedPassword,
            username,
            role,
        });

        // Save user to database
        await newUser.save();

        newUser.password = undefined;
        return sendSuccessResponse(res, "Registration Successful");
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "Server Error From Register Auth Controller",
            error.message
        );
    }
};

// LOGIN FUNCTION

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return sendErrorResponse(
                res,
                400,
                "email and password are required"
            );
        }

        if (password.length < 8) {
            return sendErrorResponse(
                res,
                400,
                "Password must be at least 8 characters."
            );
        }

        // Check if user exists
        const user = await Auth.findOne({ email });
        if (!user) {
            return sendErrorResponse(res, 400, "Invalid Email Or Password");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return sendErrorResponse(res, 400, "Invalid Password");
        }

        // Generate JWT token
        const token = jwt.sign(
            { authId: user._id, authEmail: user.email },
            process.env.JOB_JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );
        user.password = undefined;
        return sendSuccessResponse(res, "Login Successful", { token, user });
    } catch (error) {
        return sendErrorResponse(res, 500, {
            message: "Server Error From Login Auth Controller",
            error: error.message,
        });
    }
};
