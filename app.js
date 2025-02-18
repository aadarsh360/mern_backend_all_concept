import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
dotenv.config();

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Server running at PORT ${PORT}`);
})