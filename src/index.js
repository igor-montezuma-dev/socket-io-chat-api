import dotenv from "dotenv";
import express from "express";
import { connectDb } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDb();
});
