import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();
const ThemeUpdatecontext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdatecontext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdatecontext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdatecontext.Provider>
    </ThemeContext.Provider>
  );
}
