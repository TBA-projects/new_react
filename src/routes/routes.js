import Home from "../views/home";
import About from '../views/about';
import Dashboard from '../views/dashboard';
import Signin from '../components/Signin';
import Eveonline from '../views/eveonline';

var routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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