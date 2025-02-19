import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
dotenv.config();

import userRouter from './routes/user.js';

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.use('/api/v1/user', userRouter);

// localhost:8000/api/v1/user

app.listen(PORT, ()=>{
    console.log(`Server running at PORT ${PORT}`);
})