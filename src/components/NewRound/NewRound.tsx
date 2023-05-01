import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewRound = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  const handleIncrement = () => {
    if (numberOfPlayers < 8) {
      setNumberOfPlayers(numberOfPlayers + 1);
    }
  };

  const handleDecrement = () => {
    if (numberOfPlayers > 1) {
      setNumberOfPlayers(numberOfPlayers - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // validate the input value
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // create a new round object and store it in Recoil state
  };

  return (
    <div>
      <h1>New Round</h1>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <label htmlFor="numberOfPlayers">Number of Players</label>
        <input
          type="number"
          id="numberOfPlayers"
          name="numberOfPlayers"
          min={1}
          max={8}
          value={numberOfPlayers}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleIncrement}>
          +
        </button>

        <br />
        {Array.from({ length: numberOfPlayers }).map((_, index) => (
          <div key={index}>
            <h4>Player {index + 1} </h4>
            <label htmlFor={`playerName-${index}`}>Name</label>
            <input type="text" id={`playerName-${index}`} name={`playerName-${index}`} required />
            <label htmlFor={`playerHandicap-${index}`}>Handicap</label>
            <input type="number" id={`playerHandicap-${index}`} name={`playerHandicap-${index}`} />
          </div>
        ))}
        <button type="submit">Start Round</button>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default NewRound;
