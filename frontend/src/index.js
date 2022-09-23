import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import YourCourses from "views/Pages/YourCourses.js"
// import SignIn from "./views/Pages/SignIn";
// import Dashboard from "./views/Dashboard/Dashboard";
// import RTLLayout from "layouts/RTL.js";

  

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect path={`/`} to='/auth/SignIn/redirectUrl=https%3A%2F%2Flearn.noja.co%2F' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);




