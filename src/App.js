import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import RootRouter from './routes/rootRouter';


function App() {
  return (
    <div className="App">
      <Router>
        <RootRouter />
      </Router>
    </div>
  );
}

export default App;
