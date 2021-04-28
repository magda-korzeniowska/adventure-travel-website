import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>ADVENTURE IS WAITING!!!!</h1>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
