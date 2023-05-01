import { useRecoilState, useRecoilValue } from 'recoil';
import { CurrentRoundState, CurrentHoleSelector } from '../../store/atoms/CurrentRoundState';
import { Link } from 'react-router-dom';

const CurrentRound = () => {
  const [currentRound, setCurrentRound] = useRecoilState(CurrentRoundState);
  const currentHole = useRecoilValue(CurrentHoleSelector);

  const handleScoreChange = (playerIndex: number, holeIndex: number, value: string) => {
    const updatedPlayer = {
      ...currentRound.players[playerIndex],
      scores: {
        ...currentRound.players[playerIndex].score,
        [holeIndex]: parseInt(value)
      }
    };

    const updatedPlayers = [
      ...currentRound.players.slice(0, playerIndex),
      updatedPlayer,
      ...currentRound.players.slice(playerIndex + 1)
    ];

    setCurrentRound({
      ...currentRound,
      players: updatedPlayers
    });
  };

  const handlePreviousHole = () => {
    if (currentHole > 1) {
      setCurrentRound({ ...currentRound, currentHole: currentHole - 1 });
    }
  };

  const handleNextHole = () => {
    if (currentHole < 18) {
      setCurrentRound({ ...currentRound, currentHole: currentHole + 1 });
    } else {
      // Finish round logic
    }
  };

  const handleEndRound = () => {
    // calculate round results and update state
    const updatedPlayers = currentRound.players.map((player) => {
      let totalScore = 0;
      for (let score of Object.values(player.score)) {
        totalScore += score;
      }

      const netScore = totalScore - player.handicap;
      return {
        ...player,
        totalScore,
        netScore
      };
    });

    setCurrentRound({
      ...currentRound,
      players: updatedPlayers,
      isComplete: true
    });
  };

  const playersList = currentRound.players.map((player, playerIndex) => {
    const scoreList = player.score.map((hole, holeIndex) => {
      const score = player.score[holeIndex] ?? '';
      return (
        <input
          key={`${playerIndex}-${holeIndex}`}
          type="text"
          value={score}
          onChange={(e) => handleScoreChange(playerIndex, holeIndex, e.target.value)}
        />
      );
    });
  });

  return (
    <div>
      <h1>Current Round</h1>
      <div>Current Hole: {currentHole}</div>
      <button onClick={handlePreviousHole} disabled={currentHole === 1}>
        Previous hole
      </button>
      <button onClick={handleNextHole} disabled={currentHole === 18}>
        {currentHole === 17 ? 'Finish round' : 'Next hole'}
      </button>
      {currentRound.players.map((player, index) => (
        <div key={player.playerName}>
          <div>{player.playerName}</div>
          <input
            type="number"
            value={player.score[currentHole - 1]}
            onChange={(e) => handleScoreChange(index, holeIndex, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CurrentRound;
