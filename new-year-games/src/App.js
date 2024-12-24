import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome/Welcome';
import Garland from './components/UI/Garland/Garland';
import PlayinField from './pages/PlayingField/PlayingField'
import GameMelody from './pages/GameMelody/GameMelody';
import WhereLogics from './pages/WhereLogics/WhereLogics';
import WhatWhereWhen from './pages/WhatWhereWhen/WhatWhereWhen';
import FieldMelody from './components/FieldMelody/FieldMelody';
import Cart from './components/Cart/Cart';

import {QUESTIONS_MELODY} from './utils/constant'

function App() {
  
  return (
    <div className="main-container">
      <Garland/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="field" element={<PlayinField />} />
          <Route path="field/melody" element={<GameMelody />} />
          <Route path="field/melody/playing-field" element={<FieldMelody />} />
          <Route path="field/melody/playing-field/question1" element={<Cart question={QUESTIONS_MELODY[0]}/>} />
          <Route path="field/melody/playing-field/question2" element={<Cart question={QUESTIONS_MELODY[1]}/>} />
          <Route path="field/melody/playing-field/question3" element={<Cart question={QUESTIONS_MELODY[2]}/>} />
          <Route path="field/melody/playing-field/question4" element={<Cart question={QUESTIONS_MELODY[3]}/>} />
          <Route path="field/melody/playing-field/question5" element={<Cart question={QUESTIONS_MELODY[4]}/>} />
          <Route path="field/melody/playing-field/question6" element={<Cart question={QUESTIONS_MELODY[5]}/>} />
          <Route path="field/melody/playing-field/question7" element={<Cart question={QUESTIONS_MELODY[6]}/>} />
          <Route path="field/melody/playing-field/question8" element={<Cart question={QUESTIONS_MELODY[7]}/>} />
          <Route path="field/melody/playing-field/question9" element={<Cart question={QUESTIONS_MELODY[8]}/>} />
          <Route path="field/melody/playing-field/question10" element={<Cart question={QUESTIONS_MELODY[9]}/>} />
          <Route path="field/melody/playing-field/question11" element={<Cart question={QUESTIONS_MELODY[10]}/>} />
          <Route path="field/melody/playing-field/question12" element={<Cart question={QUESTIONS_MELODY[11]}/>} />
          <Route path="field/melody/playing-field/question13" element={<Cart question={QUESTIONS_MELODY[12]}/>} />
          <Route path="field/melody/playing-field/question14" element={<Cart question={QUESTIONS_MELODY[13]}/>} />
          <Route path="field/melody/playing-field/question15" element={<Cart question={QUESTIONS_MELODY[14]}/>} />
          <Route path="field/melody/playing-field/question16" element={<Cart question={QUESTIONS_MELODY[15]}/>} />
          <Route path="field/melody/playing-field/question17" element={<Cart question={QUESTIONS_MELODY[16]}/>} />
          <Route path="field/melody/playing-field/question18" element={<Cart question={QUESTIONS_MELODY[17]}/>} />


          <Route path="field/where-logics" element={<WhereLogics />} />
          <Route path="field/www" element={<WhatWhereWhen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
