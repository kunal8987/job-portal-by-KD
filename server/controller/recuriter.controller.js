import Recruiter from "./../models/recuriter.model.js";

// CREATE RECRUITER FUNCTION
export const createRecruiter = async (req, res) => {
    try {
        // Extract required fields from the request body
        const { firstName, lastName, email, phone, company } = req.body;

        // Validate if all required fields are provided
        if (!firstName || !lastName || !email || !phone || !company) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        // Check if a recruiter with the same email already exists
        const existingRecruiter = await Recruiter.findOne({ email });
        if (existingRecruiter) {
            return sendErrorResponse(
                res,
                409,
                "Recruiter with this email already exists."
            );
        }

        // Create a new recruiter with the provided details
        const newRecruiter = new Recruiter(req.body);

        // Save the new recruiter to the database
        await newRecruiter.save();

        // Send a success response with the newly created recruiter
        return sendSuccessResponse(
            res,
            201,
            "Recruiter created successfully.",
            newRecruiter
        );
    } catch (error) {
        // Handle any errors that occur during the creation process
        return sendErrorResponse(
            res,
            500,
            "An error occurred while creating the recruiter.",
            error.message
        );
    }
};

// UPDATE RECRUITER FUNCTION
export const updateRecruiter = async (req, res) => {
    try {
        // Extract the recruiter's ID from the request parameters
        const { id } = req.params;

        // Attempt to find the recruiter by their ID
        const recruiter = await Recruiter.findById(id);
        // If the recruiter is not found, send a 404 error response
        if (!recruiter) {
            return sendErrorResponse(res, 404, "Recruiter not found.");
        }

        // Update the recruiter with the provided request body and return the updated document
        const updateRecruiter = await Recruiter.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        // Send a success response with the updated recruiter
        return sendSuccessResponse(
            res,
            200,
            "Recruiter updated successfully.",
            updateRecruiter // Assign the updated recruiter to the variable recruiter for clarity
        );
    } catch (error) {
        // Handle any errors that occur during the update process
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the recruiter.",
            error.message
        );
    }
};
