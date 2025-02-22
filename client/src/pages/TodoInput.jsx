import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() === "") return; // Prevent adding empty todos
    addTodo(todo);
    setTodo(""); // Clear input after adding
  };

   // Handle Enter key press
   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key press
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
