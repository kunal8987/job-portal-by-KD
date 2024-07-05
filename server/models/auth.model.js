import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name Is Required"],
            lowercase: true,
        },
        lastName: {
            type: String,
            required: [true, "Last Name Is Required"],
            lowercase: true,
        },
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
            enum: ["user", "admin"],
            default: "user",
        },
    },
    { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
