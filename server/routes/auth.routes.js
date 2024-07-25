import express from "express";
import { login, register } from "../controller/auth.controller.js";

// Create a new router for authentication
let authRouter = express.Router();

// Handle POST request for user registration
authRouter.post("/register", register);

// Handle POST request for user login
authRouter.post("/login", login);

export default authRouter;
