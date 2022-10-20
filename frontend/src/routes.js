// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Sudents from "views/Dashboard/Tables.js";
// import YourCourses from "courses/javascript/YourCourses";
 import About from "views/Pages/About.js";
import Profile from "views/Dashboard/Profile.js";
import JoinUs from "views/Pages/JoinUs.js";
import Contact from "views/Pages/Contact";
import SignIn from 'views/Pages/SignIn.js';


import {
  HomeIcon,
  StatsIcon,
} from "components/Icons/Icons";
import { EmailIcon,LockIcon } from '@chakra-ui/icons'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

var dashRoutes
const onveriveconnection=sessionStorage.getItem('_stud')
 if(onveriveconnection){
  dashRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: Dashboard,
      layout: "/auth",
    },
    {
      path: "/Contact",
      name: "Contact",
      rtlName: "لوحة القيادة",
      icon: <EmailIcon color='inherit' />,
      component: Contact,
      layout: "/auth",
    },
    {
      path: "/About",
      name: "About",
      rtlName: "لوحة القيادة",
      icon: <InfoIcon color='inherit' />,
      component: About,
      layout: "/auth",
    },
    {
      path: "/profile",
      name: "Profile",
      rtlName: "لوحة القيادة",
      icon: <AccountBoxIcon color='inherit' />,
      secondaryNavbar: true,
      component: Profile,
      layout: "/auth",
    },
    {
      path: "/Sudents",
      name: "Students",
      rtlName: "لوحة القيادة",
      icon: <StatsIcon color='inherit' />,
      component: Sudents,
      layout: "/auth",
    },
    {
      path: "/JoinUs",
      name: "Join Us",
      rtlName: "لوحة القيادة",
      icon: <AppRegistrationIcon color='inherit' />,
      component: JoinUs,
      layout: "/auth",
    },
    {
      
      category: "account",
      rtlName: "صفحات",
      state: "pageCollapse",
      views: [
       
        {
          path: "/SignIn/redirectUrl=https%3A%2F%2Flearn.noja.co%2F",
          name: "SignIn",
          rtlName: "لوحة القيادة",
          icon: <AppRegistrationIcon color='inherit' />,
          component: Dashboard,
          layout: "/auth",
        },
      ],
    },
  ];
 }else{
  dashRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: Dashboard,
      layout: "/auth",
    },
    {
      path: "/Contact",
      name: "Contact",
      rtlName: "لوحة القيادة",
      icon: <EmailIcon color='inherit' />,
      component: Contact,
      layout: "/auth",
    },
    {
      path: "/About",
      name: "About",
      rtlName: "لوحة القيادة",
      icon: <InfoIcon color='inherit' />,
      component: About,
      layout: "/auth",
    },
    {
      path: "/profile",
      name: "Profile",
      rtlName: "لوحة القيادة",
      icon: <AccountBoxIcon color='inherit' />,
      secondaryNavbar: true,
      component: SignIn,
      layout: "/auth",
    },
    {
      path: "/Sudents",
      name: "Sudents",
      rtlName: "لوحة القيادة",
      icon: <StatsIcon color='inherit' />,
      component: SignIn,
      layout: "/auth",
    },
    {
      path: "/JoinUs",
      name: "Join Us",
      rtlName: "لوحة القيادة",
      icon: <AppRegistrationIcon color='inherit' />,
      component: JoinUs,
      layout: "/auth",
    },
    {
      
      category: "account",
      rtlName: "صفحات",
      state: "pageCollapse",
      views: [
       
        {
          path: "/SignIn/redirectUrl=https%3A%2F%2Flearn.noja.co%2F",
          name: "SignIn",
          rtlName: "لوحة القيادة",
          icon: <AppRegistrationIcon color='inherit' />,
          component: SignIn,
          layout: "/auth",
        },
      ],
    },
  ];
 }
 
// }
export default dashRoutes;
