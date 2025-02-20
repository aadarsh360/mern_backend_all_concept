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

// get all todos
export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        console.log(todos);
        return res.status(201).json({
            success: true,
            todos,
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a todo by a Id
export const updateTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(todoId, { title, description }, { new: true });
        // todo.save();

        return res.status(200).json({
            success: true,
            todo,
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete a todo by a id
export const deleteTodo = async(req, res)=>{
    try{
        const {todoId} = req.params;
        const todo = await Todo.findByIdAndDelete(todoId);

        return res.status(200).json({
            success:true,
            message:"todo is delete",
            todo,
        })
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}