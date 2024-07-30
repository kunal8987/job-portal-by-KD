import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createCandidate,
    createEducation,
    createExperience,
    getCandidate,
} from "../controller/candidate.controller.js";

// Create a new router for candidate operations
const candidateRouter = express.Router();

// Handle POST request for creating a new candidate
candidateRouter.post("/create", authMiddleware, createCandidate);

// Handle PATCH request for adding experience to a candidate
candidateRouter.patch("/add-experience", authMiddleware, createExperience);

// Handle PATCH request for adding education to a candidate
candidateRouter.patch("/add-education", authMiddleware, createEducation);


candidateRouter.patch("/get", authMiddleware, getCandidate);

export default candidateRouter;
