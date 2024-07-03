import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayCard from './components/DisplayCard';
import Product_Component from './components/Product_Component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayCard />} />
        <Route path="/product/:id" element={<Product_Component />} />
      </Routes>
    </Router>
  );
}

export default App;
