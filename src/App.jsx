import { useState } from "react";
import OpeningPage from "./OpeningPage";
import FrontPage from "./FrontPage";
import ClawMachine from "./ClawMachine";

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [unlocked, setUnlocked] = useState(false);

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

  return <ClawMachine />;
}