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
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-white text-2xl font-semibold text-center mb-4">Create a New Todo</h2>

      <input
        type="text"
        className="w-full px-4 py-3 mb-4 border border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-800 shadow-md placeholder-gray-500"
        placeholder="📝 Enter Todo Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
      />

      <textarea
        className="w-full px-4 py-3 mb-4 border border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-800 shadow-md placeholder-gray-500"
        placeholder="🖊️ Enter Todo Description..."
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
      ></textarea>

      <button
        className="w-full bg-white text-blue-600 font-semibold px-4 py-3 rounded-md shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        onClick={handleAddTodo}
      >
        ➕ Add Todo
      </button>
    </div>

  );
};

export default TodoInput;
