import logo from "./logo.svg";
import "./App.css";
import countryData from "./capitals.json";
import { useState, useEffect } from "react";
import CapitalsContainer from "./components/CapitalsContainer";

function App() {
  const [randomCountry, setRandomCountry] = useState({});
  const [capitalOptions, setCapitalOptions] = useState([]);

  const setCapital = () => {
    const capitalArray = [];
    while (capitalArray.length < 5) {
      const countryIndex = Math.floor(Math.random() * countryData.length);
      const country = countryData[countryIndex];
      const capital = country.capital;
      if (country !== randomCountry || !(country in capitalArray)) {
        capitalArray.push(capital);
      }
    }
    const capitalIndex = Math.floor(Math.random() * 4);
    capitalArray[capitalIndex] = randomCountry.capital + "correct";
    console.log(capitalArray);
    setCapitalOptions(capitalArray);
  };

  useEffect(() => {
    setCapital();
  }, [randomCountry]);

  useEffect(() => {
    chooseCapital();
  }, []);

  const chooseCapital = () => {
    const countryIndex = Math.floor(Math.random() * countryData.length);
    const country = countryData[countryIndex];
    setRandomCountry(country);
  };

  return (
    <div className="App">
      <h1>What is the capital of {randomCountry.name}? </h1>
      <CapitalsContainer capitalOptions={capitalOptions} />
      <button onClick={chooseCapital}>next</button>
    </div>
  );
}

export default App;
