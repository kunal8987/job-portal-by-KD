import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email Is Required"],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password Is Required"],
        },
        username: {
            type: String,
            required: [true, "Username Is Required"],
            unique: true,
            lowercase: true,
        },
        role: {
            type: String,
            enum: ["candidate", "recruiter", "admin"],
            default: "candidate",
        },
    },
    { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
