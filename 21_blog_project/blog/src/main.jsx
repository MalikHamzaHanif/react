
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/Aboutpage.jsx'
import ServicesPage from './pages/Servicespage.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Allblogs from './pages/Allblogs.jsx'
import Singleblog from './pages/Singleblog.jsx'
import Protected from './components/Protected.jsx'
import { Provider } from 'react-redux'
import store from "./app/store/store.js"
import Createblogpage from './pages/Createblogpage.jsx'
import Userprofile from './pages/Userprofile.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Homepage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/services",
                element: <ServicesPage />
            },
            {
                path: "/register",
                element: <Protected authentication={false}>
                    <Signup />
                </Protected>
            },
            {
                path: "/login",
                element: <Protected authentication={false}>
                    <Signin />
                </Protected>
            },
            {
                path: "/allblogs",
                element: <Protected authentication={true}>
                    <Allblogs />
                </Protected>
            },
            {
                path: "/allblogs/:id",
                element: <Protected authentication={true}>
                    <Singleblog />
                </Protected>
            },
            {
                path: "/createblog",
                element: <Protected authentication={true}>
                    <Createblogpage />
                </Protected>
            },
            {
                path: "/profile",
                element: <Protected authentication={true}>
                    <Userprofile />
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
