import React, { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoInput from './TodoInput';
import '../App.css';

function Home() {

    const [todos, setTodos] = useState([]);

    const fetchAllTodo = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/todo");
            console.log(response.data);
            setTodos(response.data.todos);
        }
        catch (error) {

        }
    }

    // Function to add a todo (with API call)
    const addTodo = async (newTodo) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/todo", newTodo,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                }
            );

            setTodos([...todos, response.data]); // Update UI with response data
            toast.success("Todo added successfully! ✅"); // Success toast
            fetchAllTodo();
        } catch (error) {
            toast.error("Failed to add todo ❌"); // Error toast
            console.error("Error adding todo:", error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="mt-5 py-5 items-center justify-center min-h-screen p-6">
                <h1 className="text-3xl font-bold mb-4">MERN Todo App</h1>
                <TodoInput addTodo={addTodo} />

                <ul className="mt-6 space-y-4">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 rounded-lg shadow-lg border border-gray-300 transition transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-xl font-bold border-b border-white pb-2 mb-2">{todo.title}</h3>
                            <p className="text-white opacity-90">{todo.description}</p>
                        </li>
                    ))}
                </ul>



                {/* Toast Notification Container */}
                <ToastContainer position="top-right" autoClose={2000} />
            </div>

        </>
    )
}

export default Home
