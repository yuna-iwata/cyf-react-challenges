import "./App.css";
import { useState } from "react";
import CountriesList from "./components/CountriesList";

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const styles = {
    dark: {
      backgroundColor: "white",
      color: "black",
    },
    light: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div className="App" style={styles[theme]}>
      <h1>Where in the world?</h1>
      <button onClick={handleThemeClick}>{theme}</button>
      <CountriesList />
    </div>
  );
}

export default App;
