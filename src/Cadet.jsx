import giftImg from "./assets/gift1.png";

export default function Cadet({ onBack }) {
  return (
    <div className="app">
      <h1>Hell Diva</h1>

      <img
        src={giftImg}
        alt="Hell Diva"
        style={{ width: "250px" }}
      />

      <button
        className="prize-btn"
        onClick={onBack}
      >
        Extract Another!
      </button>
    </div>
  );
}