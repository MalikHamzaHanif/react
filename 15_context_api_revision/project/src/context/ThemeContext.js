import { createContext, useContext } from "react"

const ThemeContext = createContext({
    themeColor:"light",
    darkMode:()=>{},
    lightMode:()=>{},
});

export default ThemeContext;


const ThemeContextProvider=ThemeContext.Provider

const UseThemeContext=()=>useContext(ThemeContext);

export {ThemeContextProvider,UseThemeContext};

