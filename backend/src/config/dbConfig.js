import mongoose from "mongoose";
// import { MONGO_URI } from "./serverConfig.js";

import dotenv from "dotenv";

dotenv.config();


export const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to mongoDb database${mongoose.connection.host}`)
    } catch (error) {   
        console.log(error,'Soemthing went wrong');
    }
};