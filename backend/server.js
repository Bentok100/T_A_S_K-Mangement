import express from "express";
import { createServer } from "http";
import cors from "cors";
import apiRouter from "./src/routes/apiRouter.js";
import { connectDB } from "./src/config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const httpServer = createServer(app);

console.log("CORS allowed origin:", process.env.FRONTEND);

const allowedOrigins = [
  "https://t-a-s-k-mangement.onrender.com",
  "http://localhost:5173",
  "http://localhost:5174"
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('Request Origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "x-access-token"]
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

app.use('/api', apiRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

connectDB().then(() => {
  httpServer.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
