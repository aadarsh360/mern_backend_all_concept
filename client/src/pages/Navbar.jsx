import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsLoggedIn(true)}
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
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
