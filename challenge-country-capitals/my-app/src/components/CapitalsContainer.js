import CapitalsButtons from "./CapitalsButton.js";
import { useEffect, useState } from "react";

export default function CapitalsContainer({ capitalOptions, randomCountry }) {
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const onCapitalClick = (correct) => {
    if (correct) {
      console.log("correct");
      setMessage("correct");
      setScore(score + 1);
    } else {
      console.log("incorrect");
      setMessage("incorrect");
    }
  };

  useEffect(() => {
    setMessage("");
  }, [randomCountry]);

  const allButtons = capitalOptions.map((item) => {
    return (
      <CapitalsButtons
        capital={item.option}
        correct={item.correct}
        onCapitalClick={onCapitalClick}
      />
    );
  });
  return (
    <div>
      <p>{score}</p>
      {allButtons}
      <p>{message}</p>
    </div>
  );
}
