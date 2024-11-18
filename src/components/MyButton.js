import React, { useState } from "react";
import "../styles/MyButton.css";

function MyButton() {
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false); 

  const clickSound = new Audio(require("../assets/sounds/click.wav"));
  const snapSound = new Audio(require("../assets/sounds/snap.wav"));

  const handleClick = () => {
    if (count === 9) {
      snapSound.play();
      setIsGreen(true); 
      setTimeout(() => {
        setIsGreen(false); 
      }, 1000);
    } else {
      clickSound.play();
    }

    setCount((prevCount) => (prevCount + 1) % 10);
  };

  return (
    <div className="center-container">
      <button
        className={`big-button ${isGreen ? "green" : ""}`}
        onClick={handleClick}
      >
        {count}
      </button>
    </div>
  );
}

export default MyButton;