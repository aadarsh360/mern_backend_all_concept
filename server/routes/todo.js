import express from "express";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todo.js";
import isAuthenticated from "../middleware/isAuthenticated.js"
const router = express();

router.route('/').post(isAuthenticated, createTodo).get(getAllTodo);
router.route('/:todoId').put(isAuthenticated, updateTodo).delete(isAuthenticated, deleteTodo);

export default router;