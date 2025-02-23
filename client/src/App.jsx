import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import TodoInput from './pages/TodoInput'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/Login';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
