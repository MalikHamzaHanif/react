import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import store from "./app/store/store.js"
import Services from './pages/Services.jsx'
import AllPost from './pages/AllPost.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Signup from './pages/Signup.jsx'
import Protected from './components/Protected.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "allposts",
        element: <Protected authentication={true}>
       
          <AllPost />

        </Protected>
      },
      {
        path: "register",
        element: <Protected authentication={false}>
        
          <Signup />
        </Protected>
      },
      {
        path: "login",
        element: <Protected authentication={false}>
    
          <Login />
        </Protected>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

)
