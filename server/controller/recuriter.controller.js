import Recruiter from "./../models/recuriter.model.js";

export const createRecruiter = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company } = req.body;

        if (!firstName || !lastName || !email || !phone || !company) {
            return sendErrorResponse(
                res,
                400,
                "All required fields must be provided."
            );
        }

        const existingRecruiter = await Recruiter.findOne({ email });
        if (existingRecruiter) {
            return sendErrorResponse(
                res,
                409,
                "Recruiter with this email already exists."
            );
        }

        const newRecruiter = new Recruiter(req.body);

        await newRecruiter.save();

        return sendSuccessResponse(
            res,
            201,
            "Recruiter created successfully.",
            newRecruiter
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while creating the recruiter.",
            error.message
        );
    }
};

export const updateRecruiter = async (req, res) => {
    try {
        const { id } = req.params;

        const recruiter = await Recruiter.findById(id);
        if (!recruiter) {
            return sendErrorResponse(res, 404, "Recruiter not found.");
        }

        const updateRecuriter = await Recruiter.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        return sendSuccessResponse(
            res,
            200,
            "Recruiter updated successfully.",
            (recruiter = updateRecuriter)
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            500,
            "An error occurred while updating the recruiter.",
            error.message
        );
    }
};
