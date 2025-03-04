import React from 'react'
import { NavLink } from "react-router-dom"
function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-orange" : "text-black"}`} >Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-orange" : "text-black"}`}  >About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "text-orange" : "text-black"}`} >Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/user"} className={({isActive}) => `${isActive ? "text-orange" : "text-black"}`} >Users</NavLink>
                </li>
                <li>
                    <NavLink to={"/github"} className={({isActive}) => `${isActive ? "text-orange" : "text-black"}`} >GitHub</NavLink>
                </li>
             

            </ul>
        </div>
    )
}

export default Header
