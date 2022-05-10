import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Vocals from './routes/Vocals';
import GuitarBass from './routes/Guitar-Bass';
import Drums from './routes/Drums';
import NotFound from './routes/NotFound';
import Links from './components/Links';
import './App.css';

function App() {

  return (
    <div className="App">
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vocals" element={<Vocals />} />
        <Route path="guitarbass" element={<GuitarBass />} />
        <Route path="drums" element={<Drums />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
