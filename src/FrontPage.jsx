import { useState } from "react";

export default function FrontPage({ onUnlock }) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleEnter = () => {
    if (date === "2005-10-13") {
      onUnlock();
    } else {
      setError("Wrong date </3");
    }
  };

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
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1>YAY! you have gain access to the secret entrance</h1>
        <p> ⊹₊˚‧︵‿₊⊱·✶·⊰₊‿︵‧˚₊⊹ </p>

        <p>Select the special date, birthday boy!</p>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            marginTop: "10px",
          }}
        />

        <br />

        <button
          onClick={handleEnter}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            border: "none",
            borderRadius: "12px",
            background: "#ffcc00",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Enter
        </button>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "15px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}