import { useState } from "react";

import "./App.css";

import giftImg from "./assets/gift1.png";
import giftImg2 from "./assets/gift2.png";
import clawImg from "./assets/claw.png";
import machineImg from "./assets/machine.png";

export default function App() {
  const [clawX, setClawX] = useState(50);
  const [clawY, setClawY] = useState(110);
  const [isDropping, setIsDropping] = useState(false);
  const [score, setScore] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");
  const [currentPage, setCurrentPage] = useState("game");
  const [caughtGift, setCaughtGift] = useState(null);
  

  const generateGifts = () => {
    const gifts = [];

    const gift1Count = Math.floor(Math.random() * 6) + 3;
    const gift2Count = Math.floor(Math.random() * 4) + 1;

    let id = 1;

    for (let i = 0; i < gift1Count; i++) {
      gifts.push({
        id: id++,
        image: giftImg,
        type: "helldiva",
        x: Math.floor(Math.random() * 250) + 150,
        y: Math.floor(Math.random() * 100) + 300,
        rotation: Math.floor(Math.random() * 70) - 35,
      });
    }

    for (let i = 0; i < gift2Count; i++) {
      gifts.push({
        id: id++,
        image: giftImg2,
        type: "blueberry",
        x: Math.floor(Math.random() * 250) + 150,
        y: Math.floor(Math.random() * 100) + 300,
        rotation: Math.floor(Math.random() * 70) - 35,
      });
    }

    return gifts;
  };

  const [gifts, setGifts] = useState(generateGifts);

  const moveLeft = () => {
    if (isDropping) return;
    setClawX((prev) => Math.max(10, prev - 10));
  };

  const moveRight = () => {
    if (isDropping) return;
    setClawX((prev) => Math.min(90, prev + 10));
  };

const dropClaw = () => {
  if (isDropping || gifts.length === 0) return;

  setIsDropping(true);
  setClawY(320);

  setTimeout(() => {
    const clawPixelX = 70 + (clawX / 100) * 450;

    const grabbedGift = gifts.find(
      (gift) => Math.abs(gift.x + 45 - clawPixelX) < 50
    );

    if (grabbedGift) {
      setCaughtGift(grabbedGift);

      if (grabbedGift.type === "blueberry") {
        setPopupMessage("You caught a Blueberry!");
      } else if (grabbedGift.type === "helldiva") {
        setPopupMessage("You caught a Hell Diva!");
      } else {
        setPopupMessage("You caught a Gift!");
      }

      setGifts((prev) =>
        prev.filter((gift) => gift.id !== grabbedGift.id)
      );

      setScore((prev) => prev + 1);
    }

    setClawY(110);

    setTimeout(() => {
      setIsDropping(false);
    }, 800);
  }, 1200);
};

  const resetGame = () => {
    setScore(0);
    setClawX(50);
    setClawY(110);
    setIsDropping(false);
    setPopupMessage("");
    setGifts(generateGifts());
  };

if (currentPage === "blueberry") {
  return (
    <div className="app">
      <h1>Blueberry</h1>

      <img
        src={giftImg2}
        alt="Blueberry"
        style={{ width: "250px" }}
      />

      <button
        onClick={() => setCurrentPage("game")}
      >
        Back to Machine
      </button>
    </div>
  );
}

if (currentPage === "helldiva") {
  return (
    <div className="app">
      <h1>Hell Diva</h1>

      <img
        src={giftImg}
        alt="Hell Diva"
        style={{ width: "250px" }}
      />

      <button
        onClick={() => setCurrentPage("game")}
      >
        Back to Machine
      </button>
    </div>
  );
}

return (
  <div className="app">
    <h1>Claw Machine</h1>

    <div className="score">
      Gifts Won: {score}
    </div>

    <div
      className="machine"
      style={{
        backgroundImage: `url(${machineImg})`,
      }}
    >
      <img
        src={clawImg}
        alt="Claw"
        className="claw"
        style={{
          left: `${clawX}%`,
          top: `${clawY}px`,
        }}
      />

      {gifts.map((gift) => (
        <img
          key={gift.id}
          src={gift.image}
          alt="Gift"
          className="gift"
          style={{
            left: `${gift.x}px`,
            top: `${gift.y}px`,
            transform: `rotate(${gift.rotation}deg)`,
          }}
        />
      ))}
    </div>

    {popupMessage && (
      <div className="popup">
        <h2>{popupMessage}</h2>

        <button
          onClick={() => {
            if (caughtGift?.type === "blueberry") {
              setCurrentPage("blueberry");
            } else {
              setCurrentPage("helldiva");
            }

            setPopupMessage("");
          }}
        >
          View Prize
        </button>

        <button
          onClick={() => setPopupMessage("")}
        >
          Close
        </button>
      </div>
    )}

    <div className="controls">
      <button onClick={moveLeft}>◀</button>

      <button onClick={dropClaw}>
        {isDropping ? "..." : "GRAB"}
      </button>

      <button onClick={moveRight}>▶</button>

      <button onClick={resetGame}>
        RESET
      </button>
    </div>
  </div>
);
}