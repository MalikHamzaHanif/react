import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Todo from './components/Todo.jsx'
import Calculator from './components/Calculator.jsx'
import "./index.css"
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "calculator",
        element: <Calculator />
      }
    ]
  },

])
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
