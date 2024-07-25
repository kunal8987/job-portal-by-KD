// Importing necessary modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import candidateRouter from "./routes/candidate.routes.js";
import { recuriterRouter } from "./routes/recuriter.routes.js";

// Loading environment variables
dotenv.config();

// Creating an instance of Express
let app = express();

// Using JSON middleware
app.use(express.json());

// Using CORS middleware
app.use(cors());

// Using the authentication router
app.use("/api/v1/auth", authRouter);

// Using the candidate router
app.use("/api/v1/candidate", candidateRouter);

// Using the recruiter router
app.use("/api/v1/recuriter", recuriterRouter);

// Setting the port
let port = process.env.JOB_PORT || 4500;

// Starting the server
app.listen(port, async (req, res) => {
    try {
        // Connecting to the database
        await connectDB();
        console.log("Server Is Listing On Port", port);
    } catch (error) {
        // Handling errors
        console.error("An Error Occurred While Starting The Server");
        console.log(error.message);
    }
});
