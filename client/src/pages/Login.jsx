import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    // Login Function
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission refresh

        if (!email || !password) {
            toast.error("Email and Password are required!");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8000/api/v1/user/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                }
            );
            toast.success("Login successful! ✅");
            // onLoginSuccess(response.data); // Callback to parent component
            navigate('/');
        } catch (error) {
            toast.error("Login failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </div>
    );
};

export default Login;
