import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import menuRoute from "./routes/menuRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDb();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://bitboard-tseo.onrender.com',
  credentials: true
}));

app.use("/api/menu", menuRoute);

app.listen(port, () => console.log("server started"));
