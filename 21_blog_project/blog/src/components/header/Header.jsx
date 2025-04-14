import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

function Header() {
  const isAuth = useSelector((state) => state.auth.status);

  const nav = [
    { name: "Home", slug: "/", auth: true },
    { name: "About", slug: "/about", auth: true },
    { name: "Services", slug: "/services", auth: true },
    { name: "Sign Up", slug: "/register", auth: !isAuth },
    { name: "Login", slug: "/login", auth: !isAuth },
    { name: "All Blogs", slug: "/allblogs", auth: isAuth },
    { name: "Create Blog", slug: "/createblog", auth: isAuth },
    { name: "Profile", slug: "/profile", auth: isAuth },
  ];

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyBlog</h1>

        <nav>
          <ul className="flex gap-6">
            {nav.map((item) =>
              item.auth ? (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-yellow-400 font-semibold'
                        : 'text-white hover:text-yellow-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
        </nav>

        {isAuth && <Logout />}
      </div>
    </header>
  );
}

export default Header;
