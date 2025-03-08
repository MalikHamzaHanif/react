import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [themeColor, setThemeColor] = useState("light");

  function darkMode() {
    setThemeColor("dark");
  }

  function lightMode() {
    setThemeColor("light");
  }

  function changeTheme() {
    if (themeColor === "light") {
      darkMode();
    } else {
      lightMode();
    }
  }

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeColor);
  }, [themeColor]);

  return (
    <ThemeContextProvider value={{ darkMode, lightMode, themeColor }}>
      <UserContext.Provider value={{ userName, setUserName, userPassword, setUserPassword }}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome To Login Page</h1>
          <Login />
          <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-300">Welcome: {userName}</h1>

          <button 
            onClick={changeTheme} 
            className="mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300"
          >
            Set Theme To {themeColor === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </UserContext.Provider>
    </ThemeContextProvider>
  );
}

export default App;
