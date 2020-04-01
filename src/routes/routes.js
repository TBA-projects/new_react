import Home from "../views/home";
import About from '../views/about';
import Dashboard from '../views/dashboard';
import Signin from '../views/signin';
import Eveonline from '../views/eveonline';
import Countres from '../views/countres';

var routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: "/"
  },
  {
    path: "/countres",
    name: "Countres",
    component: Countres,
    layout: "/"
  },
  {
    path: "/eveonline",
    name: "Eveonline",
    component: Eveonline,
    layout: "/"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/"
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/"
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    layout: "/"
  }
];

export default routes;