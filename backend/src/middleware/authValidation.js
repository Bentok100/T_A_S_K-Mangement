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

        // Fetch user by ID
        const user = await userRepository.getUserById(decoded.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        
        req.user = user;
        next();

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({
            success: false,
            message: 'Server error during authentication',
            error: error.message
        });
    }
};

export const isAdmin = function (req, res, next) {
    if (req.user && req.user.role === 'admin') {
        return next();
    } else {
        return res.status(403).json({
            success: false,
            message: 'Access denied. Admins only.'
        });
    }
};

