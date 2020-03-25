import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Layouts
import Main from './layouts/Main';
import Signin from './layouts/Signin';


function App() {
  return (
    <Router>
      <>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/main" render={props => <Main {...props} /> } />
          <Route exact path="/about" render={props => <Main {...props} /> } />
          <Route exact path="/dashboard" render={props => <Main {...props} /> } />
          <Route exact path="/signin" render={props => <Signin /> } />
          <Redirect from="/" to="/main" />
        </Switch>
      </>
    </Router>
  );
}

export default App;
