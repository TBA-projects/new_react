import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

//components
import AppBar from './components/AppBar';

//routes
import routes from './routes';

function App() {

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            exact
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Router>
      <>
        <AppBar routes={[routes]} props={{Route}}/>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/dashboard'>dashboard</Link>
          </li>
        </ul>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/"/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
