import express from "express";
import { login, register } from "../controller/auth.controller.js";

let authRouter = express.Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

export default authRouter;
