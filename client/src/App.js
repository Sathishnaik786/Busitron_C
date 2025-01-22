import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plan from './components/Plan';
import Next from './Next';
import Payment from './components/Payment';
 // The new Next.js page

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Plan />} />
      
        <Route path="/next" element={<Next />} />
        <Route path="/payment" element={<Payment />} /> 
      </Routes>
    </Router>
  );
}

export default App;
