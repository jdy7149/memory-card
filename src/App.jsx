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
      <header className="header">
        <div className="header-content">
          <div className="title-area">
            <h1>Memory Card</h1>
            <p>
              Click each Pokémon only once. Remember which ones you've already
              clicked!
            </p>
          </div>
          <div className="score-area">
            <div className="score">
              <span>Score</span>
              <strong>{score}</strong>
            </div>
            <div className="score">
              <span>Best Score</span>
              <strong>{bestScore}</strong>
            </div>
          </div>
        </div>
      </header>
      <main>
        <GameBoard
          key={gameKey}
          currentScore={score}
          updateScore={setScore}
          updateBestScore={updateBestScore}
          resetGame={() => setGameKey((prev) => prev + 1)}
        />
      </main>
    </>
  );
}

export default App;
