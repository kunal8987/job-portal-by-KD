import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createJob,
    deleteJob,
    updateJob,
} from "../controller/job.controller.js";

// Creating a new router for job operations
const jobRoute = express.Router();

// Handling POST request for creating a new job
jobRoute.post("/create", authMiddleware, createJob);

// Handling PATCH request for updating a job
jobRoute.patch("/update-job/:id", authMiddleware, updateJob);

// Handling DELETE request for deleting a job
jobRoute.delete("/delete-job/:id", authMiddleware, deleteJob);

export default jobRoute;
