import React from 'react';
import Landing from './pages/Landing/Landing';
import Roster from './pages/Roster/Roster';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/roster" element={<Roster/>}/>
        </Routes>
    </Router>
  );
}

export default App;