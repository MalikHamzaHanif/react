import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <nav className="flex justify-center space-x-6">
                <NavLink
                    to="/"
                    className="text-white text-lg font-semibold hover:text-gray-200 transition"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/todo"
                    className="text-white text-lg font-semibold hover:text-gray-200 transition"
                >
                    Todo App
                </NavLink>
                <NavLink
                    to="/calculator"
                    className="text-white text-lg font-semibold hover:text-gray-200 transition"
                >
                    Calculator
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
