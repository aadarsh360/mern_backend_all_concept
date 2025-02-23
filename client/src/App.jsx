import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import TodoInput from './pages/TodoInput'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [todos, setTodos] = useState([]);

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

        <ul className="mt-6 w-full max-w-lg">
          {todos.map((todo, index) => (
            <li key={index} className="bg-white p-4 my-2 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-gray-600">{todo.description}</p>
            </li>
          ))}
        </ul>

        {/* Toast Notification Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>

    </>
  )
}

export default App
