import express from "express";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todo.js";
const router = express();

router.route('/').post(createTodo).get(getAllTodo);
router.route('/:todoId').put(updateTodo).delete(deleteTodo);

export default router;