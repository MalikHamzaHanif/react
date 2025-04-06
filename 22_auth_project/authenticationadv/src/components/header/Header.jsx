import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Header() {
   
    const authStatus = useSelector((state) => state.auth.status)

    const nav = [
        {
            slug: "/",
            name: "Home",
            active: true
        },
        {
            slug: "/about",
            name: "About",
            active: true
        },
        {
            slug: "/services",
            name: "Services",
            active: true
        },
        {
            slug: "/allposts",
            name: "Posts",
            active: authStatus
        },
        {
            slug: "/login",
            name: "Login",
            active: !authStatus
        },
        {
            slug: "/register",
            name: "Signup",
            active: !authStatus
        },
    ]

    return (
        <div className="bg-white shadow-md p-4 flex justify-center space-x-4">
            {nav.map((navItem) =>
                navItem.active ? (
                    <NavLink
                     
                        to={navItem.slug}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md font-medium transition ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-white hover:bg-blue-600'
                            }`
                        }
                    >
                        {navItem.name}
                    </NavLink>
                ) : null
            )}

            {authStatus && <Logout />}
        </div>
    )
}

export default Header
