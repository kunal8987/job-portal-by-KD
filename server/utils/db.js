import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection URL from environment variables
        await mongoose.connect(process.env.JOB_MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Log a success message if the connection is successful
        console.log("MongoDB connected successfully");
    } catch (error) {
        // Log an error message if the connection fails
        console.error("Error connecting to MongoDB In Utils");
        // Log the error message for debugging purposes
        console.log(error.message);
    }
};

export default connectDB;
