import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

let app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/job/auth", authRouter);

let port = process.env.JOB_PORT || 4500;
app.listen(port, async (req, res) => {
    try {
        await connectDB();
        console.log("Server Is Listing On Port", port);
    } catch (error) {
        console.error("An Error Occurred While Starting The Server");
        console.log(error.message);
    }
});
