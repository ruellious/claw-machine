import { useState } from "react";

export default function OpeningPage({ onYes }) {
const [messageIndex, setMessageIndex] = useState(0);
const [messageSize, setMessageSize] = useState(1);

const handleNo = () => {
  if (messageIndex < messages.length - 1) {
    setMessageIndex(messageIndex + 1);
  }

  setMessageSize((prev) => prev + 0.25);
};

const yesScale = 1 + messageIndex * 0.15;

const messages = [
  "Do you love me?",
  "Are you sure?",
  "Really sure?",
  "Think again",
  "Please?",
  "Come on...",
  "The YES button is right there",
  "You clicked NO again",
  "STOP PRESSING NO",
  "I am running out of messages",
  "You know the correct answer",
  "JUST CLICK YES ALREADY",
];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#4f4e4e",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
    <h1
    style={{
        fontSize: `${40 * messageSize}px`,
        transition: "all 0.3s ease",
    }}
    >
    {messages[messageIndex]}
    </h1>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
            <button
  onClick={onYes}
  style={{
    padding: "15px 30px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#ff7aa2",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: `scale(${yesScale})`,
  }}
>
  YES
</button>

                    <button
        onClick={handleNo}
        style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "none",
            background: "#ccc",
            cursor: "pointer",
        }}
        >
                NO
            </button>
        </div>
      </div>
    </div>
  );
}