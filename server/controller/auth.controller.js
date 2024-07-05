import bcrypt from "bcrypt";
import Auth from "../models/auth.model.js";
import { sendSuccessResponse } from "../utils/res.utils.js";
import { sendErrorResponse } from "../utils/error.utils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;

    try {
        // Check if user already exists
        const existingUser = await Auth.findOne({
            $or: [{ email }, { username }],
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = process.env.JOB_SALT_ROUND;
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new Auth({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            username,
        });

        // Save user to database
        await newUser.save();
        sendSuccessResponse(
            res.status(201).json({ message: "User Registered Successfully" })
        );
    } catch (error) {
        sendErrorResponse(
            res.status(500).json({
                message: "Server Error From Register Auth Controller",
                error: error.message,
            })
        );
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await Auth.findOne({ email });
        if (!user) {
            sendErrorResponse(
                res.status(400).json({ message: "Invalid Email Or Password" })
            );
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            sendErrorResponse(
                res.status(400).json({ message: "Invalid Password" })
            );
        }

        // Generate JWT token
        const token = jwt.sign(
            { authId: user._id, authEmail: user.email },
            process.env.JOB_JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );
        user.password = undefined;
        sendSuccessResponse(res, "Login Successful", { token, user });
    } catch (error) {
        sendErrorResponse(
            res.status(500).json({
                message: "Server Error From Login Auth Controller",
                error: error.message,
            })
        );
    }
};
