import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Welcome to Wildridge Disc Golf!</p>
        <Link className="App-link" to="/new-round">
          Start a new round!
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;
