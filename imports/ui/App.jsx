import React from 'react';
import Task from './Task.js';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesContainer from './routesContainer';
//import SignupForm from './signupForm'
 
// App component - represents the whole app
const App = () => {
  
  return (
    <div className="container">
      <Router>
        <RoutesContainer />
      </Router>
      </div>
  );
  
}

export default App;