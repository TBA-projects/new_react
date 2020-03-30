import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


//routes
import routes from './routes';

//layouts
import Fullscreen from './layouts/Fullscreen';
import Main from './layouts/Main';

//components
import Home from './views/home';
import Eveonline from './views/eveonline';
import Dashboard from './views/dashboard';
import About from './views/about';

function App() {
  //const getRoutes = (routes) => {
  // return routes.map((item, key) => {
  //    if (item.layout === "/") {
  //      return (
  //        <Route
  //          exact
  //          path={item.path}
  //         component={item.component}
  //          key={key}
  //       />
  //      );
  //    } else {
  //      return null;
  //    }
  //  });
  //};

  return (
    <Router>
      <>
        {/*<AppBar routes={[routes]}/>*/}
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/*getRoutes(routes)*/}
          {<Route exact path='/' render={props => <Main component={Home} {...props} />} />}
          {<Route exact path='/eveonline' render={props => <Main component={Eveonline} {...props} />} />}
          {<Route exact path='/dashboard' render={props => <Main component={Dashboard} {...props} />} />}
          {<Route exact path='/about' render={props => <Main component={About} {...props} />} />}
          {<Route exact path='/signin' render={props => <Fullscreen {...props} />} />}
          {<Redirect from="*" to="/"/>}
        </Switch>
      </>
    </Router>
  );
}

export default App;
