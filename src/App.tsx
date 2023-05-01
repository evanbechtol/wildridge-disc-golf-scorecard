import { BrowserRouter, Routes, Route, Router, Link, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NewRound from './components/NewRound/NewRound';
import CurrentRound from './components/CurrentRound/CurrentRound';
import Profile from './components/Profile/Profile';
import MyAppBar from './components/AppBar/AppBar';
import * as React from 'react';

const App = () => {
  return (
    <div>
      <MyAppBar />
      <BrowserRouter>
        <RecoilRoot>
          <Router>
            <div>
              <h1>Welcome to Golf Score Tracker!</h1>
              <p>Keep track of your score rounds of golf or disc golf.</p>
              <ul>
                <li>
                  <Link to="/new-round">New Round</Link>
                </li>
                <li>
                  <Link to="/current-round">Current Round</Link>
                </li>
              </ul>
              <Switch>
                <Route path="/new-round">
                  <NewRound />
                </Route>
                <Route path="/current-round">
                  <CurrentRound />
                </Route>
              </Switch>
            </div>
          </Router>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
};

export default App;
