
import { useState } from "react";
import OpeningPage from "./OpeningPage";
import FrontPage from "./FrontPage";
import ClawMachine from "./ClawMachine1";
import BlueberryPage from "./Blueberry";
import HellDivaPage from "./Cadet";

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState("game");

  if (showOpening) {
    return (
      <OpeningPage
        onYes={() => setShowOpening(false)}
      />
    );
  }

  if (!unlocked) {
    return (
      <FrontPage
        onUnlock={() => setUnlocked(true)}
      />
    );
  }

  if (currentPage === "blueberry") {
    return (
      <BlueberryPage
        onBack={() => setCurrentPage("game")}
      />
    );
  }

  if (currentPage === "helldiva") {
    return (
      <HellDivaPage
        onBack={() => setCurrentPage("game")}
      />
    );
  }

  return (
    <ClawMachine
      onOpenBlueberry={() => setCurrentPage("blueberry")}
      onOpenHellDiva={() => setCurrentPage("helldiva")}
    />
  );
}
