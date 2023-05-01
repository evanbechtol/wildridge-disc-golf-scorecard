import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { CurrentRoundState, Player } from '../../store/atoms/CurrentRoundState';

const NewRound = () => {
  const [currentRoundState, setCurrentRoundState] = useRecoilState(CurrentRoundState);
  const [players, setPlayers] = useState<Player[]>([
    { playerName: '', score: [].fill(0), handicap: 0 }
  ]);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(1);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [handicaps, setHandicaps] = useState<number[]>([]);
  const history = useHistory();
  const numHoles = 18;

  const handleNumberOfPlayersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setNumberOfPlayers(value);
  };

  const handlePlayerNameChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = value;
    setPlayerNames(newPlayerNames);
  };

  const handleHandicapChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newHandicaps = [...handicaps];
    newHandicaps[index] = parseInt(event.target.value) || 0;
    setHandicaps(newHandicaps);
  };

  const handleStartRoundClick = () => {
    const updatedPlayers = players.reduce(
      (acc, { playerName, handicap }) => ({
        ...acc,
        [playerName]: {
          strokes: new Array(numHoles).fill(null),
          handicap
        }
      }),
      [{ playerName: '', score: [].fill(0), handicap: 0 }]
    );

    setCurrentRoundState({
      players: updatedPlayers,
      numHoles,
      currentHole: 1,
      isComplete: false
    });
  };

  return (
    <div>
      <h1>New Round</h1>
      <div>
        <label htmlFor="numberOfPlayers">Number of Players:</label>
        <button onClick={() => setNumberOfPlayers((n) => Math.max(1, n - 1))}>-</button>
        <input
          type="number"
          id="numberOfPlayers"
          name="numberOfPlayers"
          min={1}
          max={8}
          value={numberOfPlayers}
          onChange={handleNumberOfPlayersChange}
        />
        <button onClick={() => setNumberOfPlayers((n) => Math.min(8, n + 1))}>+</button>
      </div>
      <form>
        {Array.from({ length: numberOfPlayers }, (_, index) => (
          <div key={index}>
            <label htmlFor={`playerName${index}`}>Player {index + 1} Name:</label>
            <input
              type="text"
              id={`playerName${index}`}
              value={playerNames[index] || ''}
              onChange={(event) => handlePlayerNameChange(event, index)}
              required
              minLength={3}
              maxLength={150}
              pattern="^[A-Za-z\s]+$"
            />
            <label htmlFor={`handicap${index}`}>Handicap:</label>
            <input
              type="number"
              id={`handicap${index}`}
              value={handicaps[index] || ''}
              onChange={(event) => handleHandicapChange(event, index)}
              min="0"
            />
          </div>
        ))}
        <button type="button" onClick={handleStartRoundClick}>
          Start Round
        </button>
      </form>
    </div>
  );
};

export default NewRound;
