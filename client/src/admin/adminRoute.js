import React from "react";
import { Route, Switch } from "react-router";
import Login from "./pages/Login";
import Sidenav from "./components/Sidenav";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Properties from "./pages/Properties";

function adminRoute() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <>
        <section class="main_wrapper">
          <Sidenav />

          <main role="main" className="main">
            <NavBar />
            <div className="content_wrapper p-2">
              <Route path="/admin" exact component={Dashboard} />
              <Route path="/admin/message" component={Messages} />
              <Route path="/admin/projects" component={Projects} />
              <Route path="/admin/team" component={Team} />
              <Route path="/admin/properties" component={Properties} />
            </div>
          </main>
        </section>
      </>
    </Switch>
  );
}

export default adminRoute;
