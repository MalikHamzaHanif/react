import { useState } from "react";
import "./App.css"
import { useEffect } from "react";
import useTheme, { ThemeProvider } from "./themecontext/themecontext";
function App() {
  const [theme, setTheme] = useState("light");
  function setDarkMode() {
    setTheme("dark")
  }
  function setLightMode() {
    setTheme("light")
  }

  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.remove("dark", "light");
    document.getElementsByTagName("html")[0].classList.add(theme)

  }, [theme]);
  return (
    <ThemeProvider value={{ theme, setDarkMode, setLightMode }}>
      <div>
        
      </div>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-2xl">Dark Mode Test</h1>
      
        <button className="dark:bg-gray-900 text-2xl text-black dark:text-white " onClick={() => {
          if (theme == "dark") {
            setLightMode()
          } else {
            setDarkMode()
          }
        }} >Change theme to: {theme=="light"?"dark":"light"}</button>
      
      </div>
    
    </ThemeProvider>

  );
}

export default App;
