import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JOB_JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default authMiddleware;

const adminMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JOB_JWT_SECRET_KEY);
        req.user = decoded;

        if (req.user.role !== "admin") {
            return res
                .status(403)
                .json({ message: "Access denied, admin only" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export { adminMiddleware };
