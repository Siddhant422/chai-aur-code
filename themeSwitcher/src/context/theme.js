import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "Light",
  darkTheme: () => {},
  lightTheme: () => {},
});
 
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
