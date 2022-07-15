import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NewRound from './components/NewRound/NewRound';
import Profile from './components/Profile/Profile';
import MyAppBar from './components/AppBar/AppBar';
import * as React from 'react';

const App = () => {
  return (
    <div>
      <MyAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="new-round" element={<NewRound />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
