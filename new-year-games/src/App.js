import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome/Welcome';
import Garland from './components/UI/Garland/Garland';
import PlayinField from './pages/PlayingField/PlayingField'
import GameMelody from './pages/GameMelody/GameMelody';
import WhereLogics from './pages/WhereLogics/WhereLogics';
import WhatWhereWhen from './pages/WhatWhereWhen/WhatWhereWhen';

function App() {
  
  return (
    <div className="main-container">
      <Garland/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="field" element={<PlayinField />} />
          <Route path="melody" element={<GameMelody />} />
          <Route path="where-logics" element={<WhereLogics />} />
          <Route path="www" element={<WhatWhereWhen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
