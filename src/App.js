import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/navbar.component';
import Intro from './components/intro.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Intro/>
      </div>
    </Router>
  );
}

export default App;
