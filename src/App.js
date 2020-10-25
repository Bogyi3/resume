import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import CV from './pages/CV/CV';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/resume' component={LandingPage} />
          <Route exact path='/resume/cv' component={CV} />
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
