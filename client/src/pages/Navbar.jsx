import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();


  // Logout function
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      setIsLoggedIn(false);
      toast.success("Logged out successfully ✅");
      navigate('/login');

    } catch (error) {
      toast.error("Logout failed ❌");
    }
  };

  // Login function
  const handleLogin = async () =>{
    setIsLoggedIn(true);
    navigate('/login');
  }

  return (
    <nav className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Todo App
        </a>

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div> */}

        {/* Login/Logout Button (Desktop) */}
        <div className="hidden md:flex">
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 w-full absolute left-0 top-full">
          {/* <a href="#" className="block text-white py-3 px-6 hover:bg-blue-800">
            Home
          </a>
          <a href="#" className="block text-white py-3 px-6 hover:bg-blue-800">
            About
          </a>
          <a href="#" className="block text-white py-3 px-6 hover:bg-blue-800">
            Services
          </a>
          <a href="#" className="block text-white py-3 px-6 hover:bg-blue-800">
            Contact
          </a> */}
          {/* Login/Logout Button (Mobile) */}
          <button
            className="w-full bg-green-500 text-white py-3 mt-2 hover:bg-green-700"
            onClick={isLoggedIn ? handleLogout : () => setIsLoggedIn(true)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={2000} />
    </nav>
  );
};

export default Navbar;
