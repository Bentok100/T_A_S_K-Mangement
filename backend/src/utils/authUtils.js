import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

console.log("🔐 JWT_SECRET at startup:", process.env.JWT_SECRET);  // 🔍 Check if it's loaded

export const createToken = function(payload) {
    console.log("✅ Creating token with payload:", payload);
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = async function(token) {
    try {
        console.log("🔍 Verifying token:", token); // ✅ Log incoming token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Token is valid. Decoded payload:", decoded);
        return decoded;
    } catch (error) {
        console.error("❌ JWT Verification Error:", error.message);
        return null;
    }
};
