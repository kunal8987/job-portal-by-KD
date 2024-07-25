import Candidate from "../models/candidate.model.js";
import { sendSuccessResponse } from "./../utils/res.utils.js";
import { sendErrorResponse } from "./../utils/error.utils.js";

//CREATE EXPERIENCE FUNCTION

export const createExperience = async (req, res) => {
    // Try block to handle any potential errors
    try {
        // Destructuring the request body to get the required fields
        const { title, company, startDate, endDate } = req.body;

        // Checking if the required fields are provided
        if (!title || !company || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        // Finding the candidate by their authentication ID
        const candidate = await Candidate.findOne({ authId: req.user.authId });
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        // Creating a new experience object
        const newExperience = {
            title,
            company,
            startDate,
            endDate,
        };

        // Adding the new experience to the candidate's experience array
        candidate.experience.push(newExperience);
        // Saving the candidate's updated information
        await candidate.save();

        // Sending a success response with the updated candidate information
        return sendSuccessResponse(
            res,
            201,
            "Experience added successfully.",
            candidate
        );
    } catch (error) {
        // Catch block to handle any errors that occur during the process
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
    // Try block to handle the process of adding education
    try {
        // Destructuring the required fields from the request body
        const { institution, degree, fieldOfStudy, startDate, endDate } =
            req.body;

        // Checking if the required fields are provided
        if (!institution || !degree || !fieldOfStudy || !startDate) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        // Finding the candidate by their authentication ID
        const candidate = await Candidate.findOne({ authId: req.user.authId });
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        // Creating a new education object
        const newEducation = {
            institution,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
        };

        // Adding the new education to the candidate's education array
        candidate.education.push(newEducation);
        // Saving the candidate's updated information
        await candidate.save();

        // Sending a success response with the updated candidate information
        return sendSuccessResponse(
            res,
            201,
            "Education added successfully.",
            candidate
        );
    } catch (error) {
        // Catch block to handle any errors that occur during the process
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
        // Extracting required fields from the request body
        const { name, email, phone, state, city, about, skills } = req.body;

        // Checking if all required fields are provided
        if (!name || !email || !phone || !state || !skills || !city || !about) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        // Checking if a candidate with the provided email already exists
        const existingCandidate = await Candidate.findOne({ email });
        if (existingCandidate) {
            return sendErrorResponse(
                res,
                400,
                "Candidate with this email already exists."
            );
        }

        // Creating a new candidate with the provided information
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

        // Saving the new candidate to the database
        await newCandidate.save();

        // Sending a success response with the newly created candidate
        return sendSuccessResponse(
            res,
            201,
            "Candidate created successfully.",
            newCandidate
        );
    } catch (error) {
        // Catching any errors that occur during the process and sending an error response
        return sendErrorResponse(
            res,
            500,
            "An error occurred while creating the candidate controller.",
            error.message
        );
    }
};

//UPDATE CANDIDATE FUNCTION
export const updateCandidate = async (req, res) => {
    // Update candidate details
    try {
        const { id } = req.params;

        // Find the candidate by id
        const candidate = await Candidate.findById(id);
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        // Check if the user is authorized to update the candidate
        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                404,
                "You are not authorize person to do this action."
            );
        }

        // Update the candidate details
        let updateCandidate = await Candidate.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        // Send a success response with the updated candidate
        return sendSuccessResponse(
            res,
            200,
            "Candidate updated successfully.",
            updateCandidate
        );
    } catch (error) {
        // Catch any errors that occur during the update process and send an error response
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the candidate controller.",
            error.message
        );
    }
};


//UPDATE EDUCATION FUNCTION 
export const updateEducation = async (req, res) => {
    try {
        // Extract the candidate ID from the request parameters
        const { id } = req.params;
       

        // Find the candidate by ID
        const candidate = await Candidate.findOne({authId:req.user.authId});
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        // Check if the user is authorized to update the candidate's education
        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                403,
                "You are not authorized to perform this action."
            );
        }

        // Find the specific education record to update
        const education = candidate.education.find(
            (edu) => edu._id.toString() === id
        );
        if (!education) {
            return sendErrorResponse(res, 404, "Education record not found.");
        }

        // Update the education details
        education.institution = institution;
        education.degree = degree;
        education.fieldOfStudy = fieldOfStudy;
        education.startDate = startDate;
        education.endDate = endDate;

        // Save the updated candidate
        await candidate.save();

        // Send a success response with the updated candidate
        return sendSuccessResponse(
            res,
            200,
            "Education updated successfully.",
            candidate
        );
    } catch (error) {
        // Catch any errors that occur during the update process and send an error response
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the education candidate controller.",
            error.message
        );
    }
};


//UPDATE EXPERIENCE FUNCTION 
export const updateExperience = async (req, res) => {
    // Update the experience of a candidate
    try {
        const { id } = req.params;

        // Find the candidate by ID
        const candidate = await Candidate.findOne({authId:req.user.authId});
        if (!candidate) {
            return sendErrorResponse(res, 404, "Candidate not found.");
        }

        // Check if the user is authorized to update the candidate's experience
        if (req.user.authId !== candidate.authId) {
            return sendErrorResponse(
                res,
                403,
                "You are not authorized to perform this action."
            );
        }

        // Find the specific experience record to update
        const experience = candidate.experience._id(id);
        if (!experience) {
            return sendErrorResponse(res, 404, "Experience record not found.");
        }

        // Update the experience details
        experience.title = title;
        experience.company = company;
        experience.startDate = startDate;
        experience.endDate = endDate;

        // Save the updated candidate
        await candidate.save();

        // Send a success response with the updated candidate
        return sendSuccessResponse(
            res,
            200,
            "Experience updated successfully.",
            candidate
        );
    } catch (error) {
        // Catch any errors that occur during the update process and send an error response
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the experience candidate controller.",
            error.message
        );
    }
};
