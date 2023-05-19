import React, { createContext, useEffect, useState } from "react";

const defaultState = {
  theme: 1,
};

type ThemeContextType = {
  theme: number;
  toggleTheme: (index: number) => void;
};
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<number>(defaultState.theme);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(parseInt(currentTheme));
    }
  }, []);

  const toggleTheme = (themeIndex: number) => {
    setTheme(themeIndex);
    localStorage.setItem("theme", themeIndex.toString());
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
