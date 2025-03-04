import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]

//     }
//   ]
// )
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>

    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
