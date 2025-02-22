import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import TodoInput from './pages/TodoInput'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
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
      </div>

    </>
  )
}

export default App
