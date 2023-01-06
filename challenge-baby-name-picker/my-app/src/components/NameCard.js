import "../App.css";
import { useState } from "react";

export default function NameCard({ name, sex, addFaveName }) {
  return (
    <button
      className="name-card"
      style={{ backgroundColor: sex === "f" ? "#A778B4" : "#98DFD9" }}
      value={[name, sex]}
      onClick={addFaveName}
    >
      {name}
    </button>
  );
}
