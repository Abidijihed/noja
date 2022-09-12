// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Sudents from "views/Dashboard/Tables.js";
// import YourCourses from "courses/javascript/YourCourses";
 import About from "views/Pages/About.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import Contact from "views/Pages/Contact";

import {
  HomeIcon,
  StatsIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  GraphIcon,
} from "components/Icons/Icons";
import { EmailIcon,LockIcon } from '@chakra-ui/icons'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Contact",
    name: "Contact",
    rtlName: "لوحة القيادة",
    icon: <EmailIcon color='inherit' />,
    component: Contact,
    layout: "/admin",
  },
  {
    path: "/About",
    name: "About",
    rtlName: "لوحة القيادة",
    icon: <InfoIcon color='inherit' />,
    component: About,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "Join Us",
    rtlName: "لوحة القيادة",
    icon: <AppRegistrationIcon color='inherit' />,
    component: SignIn,
    layout: "/auth",
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <AccountBoxIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/Sudents",
        name: "Sudents",
        rtlName: "لوحة القيادة",
        icon: <StatsIcon color='inherit' />,
        component: Sudents,
        layout: "/admin",
      },
      // {
      //   path: "/Sudents",
      //   name: "Logout",
      //   rtlName: "لوحة القيادة",
      //   icon: <LogoutIcon color='inherit' />,
      //   component: Sudents,
      //   layout: "/admin",
      // },
    
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   rtlName: "لوحة القيادة",
      //   icon: <RocketIcon color='inherit' />,
      //   secondaryNavbar: true,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;
