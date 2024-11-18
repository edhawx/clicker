import React, { useState, useEffect } from "react";
import "../styles/MyButton.css";
import "../styles/MuteButton.css";

function MyButton() {
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);
  const [clickSound, setClickSound] = useState(null);
  const [snapSound, setSnapSound] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const clickAudio = new Audio(require("../assets/sounds/click.wav"));
    const snapAudio = new Audio(require("../assets/sounds/snap.wav"));
    setClickSound(clickAudio);
    setSnapSound(snapAudio);

    return () => {
      clickAudio.src = "";
      snapAudio.src = "";
    };
  }, []);

  const handleClick = () => {
    if (count === 9) {
      setIsGreen(true);
      setTimeout(() => {
        setIsGreen(false);
      }, 1000);
      if (!isMuted && snapSound) snapSound.play();
    } else {
      if (!isMuted && clickSound) clickSound.play();
    }
    setCount((prevCount) => (prevCount + 1) % 10);
  };

  return (
    <div className="center-container">
      <div className="button-wrapper">
        <button
          className={`big-button ${isGreen ? "green" : ""}`}
          onClick={handleClick}
        >
          {count}
        </button>
        <button
          className="mute-button"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? "🔈" : "🔇"}
        </button>
      </div>
    </div>
  );
}

export default MyButton;