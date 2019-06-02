import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '/imports/ui/App';
import {BrowserRouter as Router} from 'react-router-dom';
import {setGlobal} from 'reactn';

setGlobal({
  userData: {}
})
Meteor.startup(() => {
  render(
    <Router>
      <div> 
        <App />
      </div>
    </Router >, document.getElementById('react-target')
  ); 
});
