import { createContext, useContext } from "react";

export const ThemeContext = createContext({       //creating createContext to hold values
    themeMode: "light",
    lightTheme: () => { },
    darkTheme: () => { },

})

export const ThemeProvider = ThemeContext.Provider   // passing my .provider in a variable

export default function useTheme() {   // consume context
    return useContext(ThemeContext)
}