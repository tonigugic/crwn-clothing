import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
  return (
    <div>Hats Page</div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
