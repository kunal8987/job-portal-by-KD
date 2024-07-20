import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createRecruiter,
    updateRecruiter,
} from "../controller/recuriter.controller.js";

export const recuriterRouter = express.Router();

recuriterRouter.post("/create", authMiddleware, createRecruiter);
recuriterRouter.patch("/update", authMiddleware, updateRecruiter);
