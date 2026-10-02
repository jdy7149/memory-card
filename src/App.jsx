import { useState } from "react";

import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameKey, setGameKey] = useState(0);

  function updateBestScore(score) {
    setBestScore((prev) => Math.max(prev, score));
  }

  return (
    <>
      <header>
        <div className="header">
          <div>Memory Card</div>
          <div>Current Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </header>
      <main>
        <GameBoard
          key={gameKey}
          currentScore={score}
          updateScore={setScore}
          updateBestScore={updateBestScore}
          resetGame={() => setGameKey((prev) => prev + 1)}
        ></GameBoard>
      </main>
    </>
  );
}

export default App;
