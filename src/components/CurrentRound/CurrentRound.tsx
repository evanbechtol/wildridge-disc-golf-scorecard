import { useState } from 'react';

type Score = {
  playerName: string;
  holeScores: number[];
};

type Props = {
  players: string[];
};

const CurrentRound = ({ players }: Props) => {
  const [currentHole, setCurrentHole] = useState(1);
  const [scores, setScores] = useState<Score[]>(() =>
    players.map((player) => ({
      playerName: player,
      holeScores: Array(18).fill(0)
    }))
  );

  const handleScoreChange = (playerIndex: number, holeIndex: number, value: number) => {
    const newScores = [...scores];
    newScores[playerIndex].holeScores[holeIndex] = value;
    setScores(newScores);
  };

  const handlePreviousHole = () => {
    if (currentHole > 1) {
      setCurrentHole(currentHole - 1);
    }
  };

  const handleNextHole = () => {
    if (currentHole < 18) {
      setCurrentHole(currentHole + 1);
    } else {
      // Finish round logic
    }
  };

  return (
    <div>
      <h2>Current Round - Hole {currentHole}</h2>
      <div>
        <button onClick={handlePreviousHole} disabled={currentHole === 1}>
          Previous hole
        </button>
        {currentHole === 18 ? (
          <button onClick={() => console.log('Finish round!')}>Finish round</button>
        ) : (
          <button onClick={handleNextHole}>Next hole</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            {Array(18)
              .fill(0)
              .map((_, i) => (
                <th key={i}>{i + 1}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => (
            <tr key={i}>
              <td>{score.playerName}</td>
              {score.holeScores.map((holeScore, j) => (
                <td key={j}>
                  <input
                    type="number"
                    min={1}
                    value={holeScore}
                    onChange={(e) => handleScoreChange(i, j, parseInt(e.target.value))}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentRound;
