import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Home from "views/Home"
import Suggestions from "views/Suggestions";
import Upgrade from "views/Upgrade";

var routes = [
  
  {
    path: "/Home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/Suggestions",
    name: "Suggestions",
    icon: "nc-icon nc-bank",
    component: Suggestions,
    layout: "/admin",
  },
  
];
export default routes;
