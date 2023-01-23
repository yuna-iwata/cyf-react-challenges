import "./App.css";
import DieRoller from "./components/DieRoller";
import { useState } from "react";

function App() {
  const numOfSides = [4, 6, 8, 10, 100, 12, 20];
  const [history, setHistory] = useState([]);

  const addToHistory = (numOfDice, numOfSides, total) => {
    const newDiceRoll = `${numOfDice}d${numOfSides} = ${total}`;
    setHistory([newDiceRoll, ...history]);
  };

  return (
    <div className="App">
      {numOfSides.map((num) => {
        return <DieRoller numOfSides={num} addToHistory={addToHistory} />;
      })}
      <div>
        {history
          ? history.map((item) => {
              return <p>{item}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default App;
