import { useState } from "react";

export default function OpeningPage({ onYes }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Choose carefully.");

  const noMessages = [
    "Are you sure?",
    "Really?",
    "Think again.",
    "That doesn't seem right.",
    "Interesting choice.",
    "Wrong answer detected.",
    "Try pressing the other button.",
    "Hmm...",
    "I don't believe you.",
    "The yellow button looked better.",
    "Suspicious response.",
    "Please reconsider.",
    "You clicked that on purpose?",
    "Let's pretend that didn't happen.",
    "Loading sadness...",
    "Error: answer not accepted.",
    "Access denied.",
    "That hurt my feelings.",
    "The progress bar disagrees.",
    "You can do better than that.",
    "Be honest.",
    "I think your mouse slipped.",
    "You sure about that, chief?",
    "That answer seems fake.",
    "The gift is judging you.",
    "Try again.",
    "Incorrect. Source: trust me.",
    "Bold choice.",
    "Noted.",
  ];

  const yesMessages = [
    "Good answer.",
    "Correct.",
    "That's what I thought.",
    "Excellent choice.",
    "Good boy.",
    "Smart guy.",
    "Keep going.",
    "That's better.",
    "Love detected.",
    "Accepted.",
    "You're doing great.",
    "That sounds right.",
    "You know what's up.",
    "Valid response.",
    "I like this answer.",
    "That's right baby.",
    "There you go, good job.",
  ];

  const handleYes = () => {
    if (progress >= 100) {
      onYes();
      return;
    }

    const increase = Math.floor(Math.random() * 10) + 5;

    setProgress((prev) => Math.min(prev + increase, 100));

    const randomIndex = Math.floor(
      Math.random() * yesMessages.length
    );

    setMessage(yesMessages[randomIndex]);
  };

  const handleNo = () => {
    setProgress((prev) => Math.max(prev - 15, 0));

    const randomIndex = Math.floor(
      Math.random() * noMessages.length
    );

    setMessage(noMessages[randomIndex]);
  };

  const getMessage = () => {
    if (progress >= 100) {
      return "Love level verified.";
    }

    return message;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4f4e4e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Do you love me?
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            minHeight: "24px",
          }}
        >
          {getMessage()}
        </p>

        <div
          style={{
            width: "100%",
            height: "24px",
            background: "#e5e5e5",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#ffcc00",
              transition: "width 0.4s ease",
            }}
          />
        </div>

        <p
          style={{
            fontWeight: "bold",
            color: "#444",
            marginBottom: "30px",
          }}
        >
          {progress}%
        </p>

        {progress >= 100 ? (
          <button
            onClick={onYes}
            style={{
              background: "#ffcc00",
              color: "#333",
              border: "none",
              borderRadius: "12px",
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Continue →
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <button
              onClick={handleYes}
              style={{
                background: "#ffcc00",
                color: "#333",
                border: "none",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Yes
            </button>

            <button
              onClick={handleNo}
              style={{
                background: "#d9d9d9",
                color: "#333",
                border: "none",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
