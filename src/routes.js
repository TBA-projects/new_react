import Home from "./views/home";
import About from './views/about';
import Dashboard from './views/dashboard';

var routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: "/"
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/"
  },
];

export default routes;