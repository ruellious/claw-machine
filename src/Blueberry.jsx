import giftImg2 from "./assets/gift2.png";

export default function BlueberryPage({ onBack }) {
  return (
    <div className="app">
      <h1>Blueberry</h1>

      <img
        src={giftImg2}
        alt="Blueberry"
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