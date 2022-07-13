import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import NewRound from './components/newRound/NewRound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="new-round" element={<NewRound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
