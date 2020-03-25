import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components

import Main from './layouts/Main';

function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" render={props => <Main {...props} /> } />
          <Route exact path="/about" render={props => <Main {...props} /> } />
          <Route exact path="/dashboard" render={props => <Main {...props} /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
