import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import YourCourses from "views/Pages/YourCourses.js"
// import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to='/admin/dashboard' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
