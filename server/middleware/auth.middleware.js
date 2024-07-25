import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// This middleware function checks if the request has a valid JWT token for authentication.
const authMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header.
    const token = req.header("Authorization");

    // If no token is found, return a 401 Unauthorized response.
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    // Attempt to verify the token using the secret key.
    try {
        const decoded = jwt.verify(token, process.env.JOB_JWT_SECRET_KEY);
        // If the token is valid, attach the decoded user to the request object.
        req.user = decoded;
        // Proceed to the next middleware or route handler.
        next();
    } catch (error) {
        // If the token is invalid, return a 401 Unauthorized response.
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default authMiddleware;

// This middleware function checks if the request has a valid JWT token for admin authentication.
const adminMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header.
    const token = req.header("Authorization");

    // If no token is found, return a 401 Unauthorized response.
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    // Attempt to verify the token using the secret key.
    try {
        const decoded = jwt.verify(token, process.env.JOB_JWT_SECRET_KEY);
        // If the token is valid, attach the decoded user to the request object.
        req.user = decoded;

        // Check if the user role is admin. If not, return a 403 Forbidden response.
        if (req.user.role !== "admin") {
            return res
                .status(403)
                .json({ message: "Access denied, admin only" });
        }

        // If the user is an admin, proceed to the next middleware or route handler.
        next();
    } catch (error) {
        // If the token is invalid, return a 401 Unauthorized response.
        res.status(401).json({ message: "Token is not valid" });
    }
};

export { adminMiddleware };
