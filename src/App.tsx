import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/landingPage/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
