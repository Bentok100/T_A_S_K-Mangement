import { userRepository } from "../repository/userRepository.js";
import { verifyToken } from "../utils/authUtils.js";

export const isAuthenticated = async function (req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        });
    }

    try {
        // Verify token
        const decoded = verifyToken(token);
        if (!decoded || !decoded.id) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token'
            });
        }

        // Fetch user (must await)
        const user = await userRepository.getUserById(decoded.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Attach user to request for further use
        req.user = user;
        next();

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({
            success: false,
            message: 'Server error during authentication'
        });
    }
};
