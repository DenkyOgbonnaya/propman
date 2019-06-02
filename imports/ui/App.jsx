import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesContainer from './routesContainer';
import Header from './header';
 
// App component - represents the whole app
const App = () => {
  
  return (
    <div className="container">
      <Header />
      <br />
      <Router>
        <RoutesContainer />
      </Router>
    </div>
  );
  
}

export default App;