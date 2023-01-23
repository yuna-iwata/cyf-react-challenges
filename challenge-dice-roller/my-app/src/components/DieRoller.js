import { useEffect, useState } from "react";
export default function DieRoller({ numOfSides, addToHistory }) {
  const [total, setTotal] = useState();
  const [numOfDice, setNumOfDice] = useState();
  const [modifier, setModifier] = useState(0);

  const rollDice = (numOfDice, numOfSides) => {
    let totalOfDiceRoll = 0;
    for (let i = 0; i < numOfDice; i++) {
      const diceNum = Math.floor(Math.random() * numOfSides + 1);
      totalOfDiceRoll += diceNum;
    }
    const totalWithModifier = parseInt(totalOfDiceRoll) + parseInt(modifier);
    if (totalWithModifier < 1) {
      setTotal(1);
    } else {
      setTotal(parseInt(totalOfDiceRoll) + parseInt(modifier));
    }
  };

  useEffect(() => {
    if (total) {
      addToHistory(numOfDice, numOfSides, total);
    }
  }, [total]);

  const handleNumOfDiceInput = (e) => {
    setNumOfDice(e.target.value);
  };

  const handleModifierInput = (e) => {
    setModifier(e.target.value);
  };

  return (
    <div>
      <p>
        <input
          placeholder="how many dice?"
          onChange={handleNumOfDiceInput}
        ></input>
        d{numOfSides} +{" "}
        <input placeholder="modifier" onChange={handleModifierInput}></input> ={" "}
        {total}
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
