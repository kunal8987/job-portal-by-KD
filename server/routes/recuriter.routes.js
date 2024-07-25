import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createRecruiter,
    updateRecruiter,
} from "../controller/recuriter.controller.js";

// Create a new router for recruiter operations
export const recuriterRouter = express.Router();

// Handle POST request for creating a new recruiter
recuriterRouter.post("/create", authMiddleware, createRecruiter);

// Handle PATCH request for updating a recruiter
recuriterRouter.patch("/update", authMiddleware, updateRecruiter);
