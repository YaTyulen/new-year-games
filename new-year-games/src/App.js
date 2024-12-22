import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome/Welcome';
import Garland from './components/UI/Garland/Garland';

function App() {
  
  return (
    <div className="main-container">
      <Garland/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
