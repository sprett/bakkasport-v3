import React from 'react';
import Landing from './pages/Landing/Landing';
import Roster from './pages/Roster/Roster';
import Content from './pages/Content/Content';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Individual from './frontend/components/Content/Individual';
import Test from './frontend/components/Content/Test';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/roster" element={<Roster/>}/>
          <Route exact path="/content" element={<Content/>}/>
          <Route exact path="/:slug" element={<Individual/>}/>
          <Route exact path="/test" element={<Test/>}/>
        </Routes>
    </Router>
  );
}

export default App;