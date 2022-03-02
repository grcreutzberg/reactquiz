import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import Header from './Jogo/Header';

function App() {
  return (   
    <Router>
      <div className="App">
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
