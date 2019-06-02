import React from 'react';
import RoutesContainer from './routesContainer';
import Header from './header';
 
// App component - represents the whole app
const App = () => {
  
  return (
    <div className="container">
      <Header />
      <br />
        <RoutesContainer />
    </div>
  );
  
}

export default App;