import React from 'react';
import Task from './Task.js';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesContainer from './routesContainer';
import Header from './header';
 
// App component - represents the whole app
const App = () => {
  
  return (
    <div className="container">
    <Header />
      <Router>
        <RoutesContainer />
      </Router>
      </div>
  );
  
}

export default App;