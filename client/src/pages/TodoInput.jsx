import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") return; // Prevent empty input
    addTodo({ title, description }); // Pass object instead of string
    setTitle("");
    setDescription("");
  };

    // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { // Prevent Shift+Enter for multi-line text
      e.preventDefault(); // Prevents new line in textarea
      handleAddTodo();
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <input
        type="text"
        className="w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Todo Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
      />
      <textarea
        className="w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Todo Description..."
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
      ></textarea>
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
