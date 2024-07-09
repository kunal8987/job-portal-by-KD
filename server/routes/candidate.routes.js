import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createCandidate,
    createEducation,
    createExperience,
} from "../controller/candidate.controller.js";

const candidateRouter = express.Router();

candidateRouter.post("/create", authMiddleware, createCandidate);
candidateRouter.patch("/add-experience", authMiddleware, createExperience);
candidateRouter.patch("/add-education", authMiddleware, createEducation);

export default candidateRouter;
