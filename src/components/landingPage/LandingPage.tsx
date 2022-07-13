import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../../assets/img/logo.png';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Welcome to Wildridge Disc Golf!</p>
        <Link className="App-link" to="/new-round">
          <Button variant="contained">Start a round</Button>
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;
