import Job from "../models/job.model.js";
import { sendErrorResponse } from "../utils/error.utils.js";
import { sendSuccessResponse } from "../utils/res.utils.js";

// CREATE JOB FUNCTION
export const createJob = async (req, res) => {
    try {
        // Extracting job details from the request body
        const {
            title,
            description,
            company,
            location,
            salary,
            requirements,
            responsibilities,
        } = req.body;

        // Validating the request body
        if (
            !title ||
            !description ||
            !company ||
            !location ||
            !salary ||
            !requirements ||
            !responsibilities
        ) {
            return sendErrorResponse(
                res,
                400,
                "Please provide all required fields."
            );
        }
        // Creating a new job instance
        const newJob = new Job({
            title,
            description,
            company,
            location,
            salary,
            requirements,
            responsibilities,
            authId: req.user.authId,
            authEmail: req.user.authEmail,
        });

        // Saving the job to the database
        await newJob.save();

        // Sending a success response to the client
        sendSuccessResponse(res, "Job created successfully", newJob);
    } catch (error) {
        // Handling errors
        console.error(
            "An error occurred while creating the job:",
            error.message
        );
        sendErrorResponse(res, 500, "Internal Server Error", error.message);
    }
};

//UPDATE JOB FUNCTION
export const updateJob = async (req, res) => {
    try {
        // Extracting job ID from the request parameters
        const { id } = req.params;

        const job = await Job.findById(id);
        if (!job) {
            return sendErrorResponse(res, 404, "Job not found.");
        }

        // Check if the user is authorized to update the candidate
        if (req.user.authId !== job.authId) {
            return sendErrorResponse(
                res,
                404,
                "You are not authorize person to do this action."
            );
        }

        // Finding the job by ID and updating it
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        // Sending a success response to the client
        sendSuccessResponse(res, "Job updated successfully", updatedJob);
    } catch (error) {
        // Handling errors
        console.error(
            "An error occurred while updating the job:",
            error.message
        );
        sendErrorResponse(res, 500, "Internal Server Error", error.message);
    }
};

// DELETE JOB FUNCTION
export const deleteJob = async (req, res) => {
    try {
        // Extracting job ID from the request parameters
        const { id } = req.params;

        // Find the job by ID and remove it
        const job = await Job.findById(id);
        if (!job) {
            return sendErrorResponse(res, 404, "Job not found.");
        }

        // Check if the user is authorized to delete the job
        if (req.user.authId !== job.authId) {
            return sendErrorResponse(
                res,
                404,
                "You are not authorized to do this action."
            );
        }

        await Job.findByIdAndDelete(id);

        // Sending a success response to the client
        sendSuccessResponse(res, "Job deleted successfully");
    } catch (error) {
        // Handling errors
        console.error(
            "An error occurred while deleting the job:",
            error.message
        );
        sendErrorResponse(res, 500, "Internal Server Error", error.message);
    }
};


// GET JOB FUNCTION
export const getJob = async (req, res) => {
    try {
       
        // Find the job by ID
        const job = await Job.find();
        if (!job) {
            return sendErrorResponse(res, 404, "Job not found.");
        }

        // Sending a success response with the found job
        sendSuccessResponse(res, 200, "Job retrieved successfully.", job);
    } catch (error) {
        // Handling errors
        console.error(
            "An error occurred while retrieving the job:",
            error.message
        );
        sendErrorResponse(res, 500, "Internal Server Error", error.message);
    }
};
