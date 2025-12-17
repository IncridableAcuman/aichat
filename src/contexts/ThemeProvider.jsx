import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  }

  useEffect(()=> {
    localStorage.setItem('theme',theme);
  },[theme]);

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}} >
      {children}
    </ThemeContext.Provider>
    </>
  )
}

const UseTheme = () => {
  const context = useContext(ThemeContext);
  if(!context) throw new Error("Error context");
  return context;
}