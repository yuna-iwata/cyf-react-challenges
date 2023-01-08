import CapitalsButtons from "./CapitalsButton.js";

export default function CapitalsContainer({ capitalOptions }) {
  const allButtons = capitalOptions.map((item) => {
    return <CapitalsButtons capital={item} />;
  });
  return <div>{allButtons}</div>;
}
