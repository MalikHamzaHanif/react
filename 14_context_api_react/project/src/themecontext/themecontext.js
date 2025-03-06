import { useContext, createContext } from "react"

export const ThemeContext = createContext(
    {
        theme:"light",
        setDarkMode:()=>{},
        setLightMode:()=>{}
    }
);

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}