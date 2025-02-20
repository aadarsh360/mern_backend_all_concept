import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {

    try {
        const { title, description } = req.body;
       
        if (!title || !description) {
            return res.status(403).json({
                success: true,
                message: "All fields are required"
            })
        }

        // create new todo
        const todo = new Todo({ title, description });
        todo.save();

        return res.status(201).json({
            success: true,
            message: "create todo",
            todo,
        })

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}