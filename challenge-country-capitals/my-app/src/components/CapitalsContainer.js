import CapitalsButtons from "./CapitalsButton.js";
import { useState } from "react";

export default function CapitalsContainer({ capitalOptions }) {
  const [correct, setCorrect] = useState(false);

  const onCapitalClick = () => {};

  const allButtons = capitalOptions.map((item) => {
    return <CapitalsButtons capital={item} />;
  });
  return <div>{allButtons}</div>;
}
