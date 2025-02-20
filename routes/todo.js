import express from "express";
import { createTodo } from "../controllers/todo.js";
const router = express();

router.route('/').post(createTodo);

export default router;