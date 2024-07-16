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
            "An error occurred while adding experience candidate controller.",
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
            "An error occurred while adding education candidate controller.",
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
            "An error occurred while creating the candidate controller.",
            error.message
        );
    }
};

export const updateCandidate = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, state, city, about, skills } = req.body;

        if (!name || !email || !phone || !state || !skills || !city || !about) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const candidate = await Candidate.findById(id);
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                404,
                "You are not authorize person to do this action."
            );
        }

        candidate.name = name;
        candidate.email = email;
        candidate.phone = phone;
        candidate.state = state;
        candidate.city = city;
        candidate.about = about;
        candidate.skills = skills;

        await candidate.save();

        return sendSuccessResponse(
            res,
            200,
            "Candidate updated successfully.",
            candidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the candidate controller.",
            error.message
        );
    }
};

export const updateEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const { institution, degree, fieldOfStudy, startDate, endDate } =
            req.body;

        if (!institution || !degree || !fieldOfStudy || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const candidate = await Candidate.findById(id);
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                403,
                "You are not authorized to perform this action."
            );
        }

        const education = candidate.education._id(id);
        if (!education) {
            return sendErrorResponse(res, 404, "Education record not found.");
        }

        education.institution = institution;
        education.degree = degree;
        education.fieldOfStudy = fieldOfStudy;
        education.startDate = startDate;
        education.endDate = endDate;

        await candidate.save();

        return sendSuccessResponse(
            res,
            200,
            "Education updated successfully.",
            candidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the education candidate controller.",
            error.message
        );
    }
};

export const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, company, startDate, endDate } = req.body;

        if (!title || !company || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const candidate = await Candidate.findOne(id);
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                403,
                "You are not authorized to perform this action."
            );
        }

        const experience = candidate.experience._id(id);
        if (!experience) {
            return sendErrorResponse(res, 404, "Experience record not found.");
        }

        experience.title = title;
        experience.company = company;
        experience.startDate = startDate;
        experience.endDate = endDate;

        await candidate.save();

        return sendSuccessResponse(
            res,
            200,
            "Experience updated successfully.",
            candidate
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the experience candidate controller.",
            error.message
        );
    }
};
