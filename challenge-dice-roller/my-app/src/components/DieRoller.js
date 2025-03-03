import { useEffect, useState } from "react";
export default function DieRoller({ numOfSides, addToHistory }) {
  const [total, setTotal] = useState();
  const [numOfDice, setNumOfDice] = useState();
  const [modifier, setModifier] = useState(0);
  const [color, setColor] = useState("black");

  const rollDice = (numOfDice, numOfSides) => {
    let totalOfDiceRoll = 0;
    for (let i = 0; i < numOfDice; i++) {
      const diceNum = Math.floor(Math.random() * numOfSides + 1);
      totalOfDiceRoll += diceNum;
    }
    const totalWithModifier = parseInt(totalOfDiceRoll) + parseInt(modifier);
    if (totalWithModifier < 1) {
      setTotal(1);
      setColor("red");
    } else {
      setTotal(parseInt(totalOfDiceRoll) + parseInt(modifier));
      setColor("black");
    }
  };

  useEffect(() => {
    if (total) {
      addToHistory(numOfDice, numOfSides, total);
    }
  }, [total]);

  const handleNumOfDiceInput = (e) => {
    const inputVal = e.target.value;
    if (inputVal) {
      setNumOfDice(e.target.value);
    }
  };

  const handleModifierInput = (e) => {
    const inputVal = e.target.value;
    if (inputVal) {
      setModifier(e.target.value);
    }
  };

  const style = {
    red: {
      color: "red",
    },
    black: {
      color: "black",
    },
  };

  return (
    <div>
      <p>
        <input
          placeholder="how many dice?"
          onChange={handleNumOfDiceInput}
          type="number"
        ></input>
        d{numOfSides} +{" "}
        <input
          placeholder="modifier"
          onChange={handleModifierInput}
          type="number"
        ></input>{" "}
        = <span style={style[color]}>{total}</span>
      </p>

      <button
        onClick={() => {
          rollDice(numOfDice, numOfSides);
        }}
      >
        roll
      </button>
    </div>
  );
}
