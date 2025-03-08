import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { setUserName, setUserPassword } = useContext(UserContext);

  function loginUser() {
    setUserName(name);
    setUserPassword(pass);
  }

  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg w-80">
      <label htmlFor="userName" className="block text-gray-700 dark:text-gray-300 font-medium">
        Name
      </label>
      <input
        type="text"
        id="userName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      <label htmlFor="userPass" className="block mt-4 text-gray-700 dark:text-gray-300 font-medium">
        Password
      </label>
      <input
        type="password"
        id="userPass"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      <button
        onClick={loginUser}
        className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-300"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
