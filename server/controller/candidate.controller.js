import Candidate from "../models/candidate.model.js";
import { sendSuccessResponse } from "./../utils/res.utils.js";
import { sendErrorResponse } from "./../utils/error.utils.js";

//CREATE EXPERIENCE FUNCTION

export const createExperience = async (req, res) => {
    try {
        const { title, company, startDate, endDate } = req.body;

        if (!title || !company || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const candidate = await Candidate.findOne({ authId: req.user.authId });
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        const newExperience = {
            title,
            company,
            startDate,
            endDate,
        };

        candidate.experience.push(newExperience);
        await candidate.save();

        return sendSuccessResponse(
            res,
            201,
            "Experience added successfully.",
            candidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while adding experience.",
            error.message
        );
    }
};

//CREATE EDUCATION FUNCTION

export const createEducation = async (req, res) => {
    try {
        const { institution, degree, fieldOfStudy, startDate, endDate } =
            req.body;

        if (!institution || !degree || !fieldOfStudy || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const candidate = await Candidate.findOne({ authId: req.user.authId });
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        const newEducation = {
            institution,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
        };

        candidate.education.push(newEducation);
        await candidate.save();

        return sendSuccessResponse(
            res,
            201,
            "Education added successfully.",
            candidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while adding education.",
            error.message
        );
    }
};

//CREATE CANDIDATE FUNCTION

export const createCandidate = async (req, res) => {
    try {
        const { name, email, phone, state, city, about, skills } = req.body;

        if (!name || !email || !phone || !state || !skills || !city || !about) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const existingCandidate = await Candidate.findOne({ email });
        if (existingCandidate) {
            return sendErrorResponse(
                res,
                400,
                "Candidate with this email already exists."
            );
        }

        const newCandidate = new Candidate({
            name,
            email,
            phone,
            state,
            city,
            about,
            skills,
            authId: req.user.authId,
        });

        await newCandidate.save();

        return sendSuccessResponse(
            res,
            201,
            "Candidate created successfully.",
            newCandidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while creating the candidate.",
            error.message
        );
    }
};
