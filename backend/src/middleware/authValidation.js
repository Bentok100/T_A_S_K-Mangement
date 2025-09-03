import { userRepository } from "../repository/userRepository.js";
import { verifyToken } from "../utils/authUtils.js";

export const isAuthenticated = function (req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        });
    }
    try {
        const response = verifyToken(token);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'invalid auth token'
            });
        }
        const user = userRepository.getUserById(response.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.usertype !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "Access denied. Admins only."
        });
    }
    next();
};
