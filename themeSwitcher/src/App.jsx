import "./App.css";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <ThemeProvider value={{ themeMode, LightTheme, DarkTheme }}>
      <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <div className="w-full max-w-sm mx-auto"></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
