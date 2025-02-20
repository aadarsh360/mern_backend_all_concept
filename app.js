import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
dotenv.config();

import userRouter from './routes/user.js';
import todoRouter from './routes/todo.js';

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.use('/api/v1/user', userRouter);
app.use('/api/v1/todo', todoRouter);

// localhost:8000/api/v1/user
// localhost:8000/api/v1/todo

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})