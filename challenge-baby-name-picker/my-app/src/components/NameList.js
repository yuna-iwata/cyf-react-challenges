import namesData from "../babyNamesData.json";
import NameCard from "./NameCard";
import { useState } from "react";

export default function NameList() {
  const [inputName, setInputName] = useState("");
  const [faveNames, setFaveNames] = useState([]);

  const searchedName = namesData.filter((item) => {
    return item.name.toLowerCase().startsWith(inputName.toLowerCase()) === true;
  });

  const onNameClick = (e) => {
    const buttonValue = e.target.value;
    const splitValue = buttonValue.split(",");
    const nameValue = splitValue[0];
    const sexValue = splitValue[1];
    setFaveNames([{ name: nameValue, sex: sexValue }, ...faveNames]);
    console.log(faveNames);
  };

  const eachName = searchedName.map((item) => {
    return (
      <NameCard name={item.name} sex={item.sex} addFaveName={onNameClick} />
    );
  });

  const allFaveNames = faveNames.map((item) => {
    return <NameCard name={item.name} sex={item.sex} />;
  });

  const onInputName = (e) => {
    setInputName(e.target.value);
    console.log(inputName);
  };

  return (
    <div>
      <input onChange={onInputName}></input>
      <p>
        Favourites:
        <div className="names-container">{allFaveNames}</div>
      </p>
      <div className="names-container">{eachName}</div>
    </div>
  );
}
