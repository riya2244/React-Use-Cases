import React, { createContext, useState } from "react";

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default theme is light

  // 3️⃣ Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Wrap children so any component inside can access theme */}
    </ThemeContext.Provider>
  );
};
