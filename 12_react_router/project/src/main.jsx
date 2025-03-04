import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import HomeChildOne from './components/home/HomeChildOne.jsx'
import HomeChildTwo from './components/home/HomeChildTwo.jsx'
import User from './components/user/User.jsx'
import UserWithId from './components/user/UserWithId.jsx'
import GitHub, { loadGitHubData } from './components/github/GitHub.jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            {
              path: "",
              element: <HomeChildOne />
            }, {
              path: "/childtwo",
              element: <HomeChildTwo />
            }
          ]
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "user",
          element:<User/>
        },
        {
          path: "user/:userId",
          element:<UserWithId/>
        },
        {
          path: "github",
          loader:loadGitHubData,
          element:<GitHub/>
        },
      ]

    }
  ]
)
// const router = createBrowserRouter(
//   createRoutesFromChildren(
//     <Route path='/' element={<App />} >
//       <Route path='' element={<Home />} >
//       <Route path="" element={<HomeChildOne/>} />
//       <Route path="childtwo" element={<HomeChildTwo/>} />
//       </Route>
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />

//     </Route>
//   )
// );
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
