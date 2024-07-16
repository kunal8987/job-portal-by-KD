import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        requirements: {
            type: [String],
            required: true,
        },
        responsibilities: {
            type: [String],
            required: true,
        },
        authId: {
            type: String,
            // required: true,
        },
        authEmail: {
            type: String,
            // required: true,
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recruiter",
            required: true,
        },
        applicants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Candidate",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
