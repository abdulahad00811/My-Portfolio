import React, { useState } from "react";
import "./LudoApp.css";

const colors = ["#d50000", "#0277bd", "#388e3c", "#fbc02d"];
const colorNames = ["Red", "Blue", "Green", "Yellow"];

export default function LudoBoard() {
  const [dice, setDice] = useState(1);
  const [turn, setTurn] = useState(0);

  const rollDice = () => {
    setDice(Math.ceil(Math.random() * 6));
    setTurn((turn + 1) % 4);
  };

  return (
    <div className="ludo-main">
      <h2>Ludo Game</h2>
      <div className="ludo-info">
        <span>
          Turn: <b style={{ color: colors[turn] }}>{colorNames[turn]}</b>
        </span>
        <span>
          Dice: <b>{dice}</b>
        </span>
        <button onClick={rollDice}>Roll Dice</button>
      </div>
      <div className="ludo-board">
        {/* Put Ludo board design here */}
        <div className="ludo-home red"></div>
        <div className="ludo-home blue"></div>
        <div className="ludo-home green"></div>
        <div className="ludo-home yellow"></div>
        <div className="ludo-center">🏆</div>
      </div>
    </div>
  );
}
//mukulshakya.github.io/Ludo-React/