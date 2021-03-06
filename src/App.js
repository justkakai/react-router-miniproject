import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
        <Route path="guitar-and-bass" element={<GuitarBass />} />
        <Route path="drums" element={<Drums />} />
        <Route path="react-router-miniproject" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
