import React from "react";
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import AppShell from "./appShell";
import appUrls from "../config/appUrls";
import AppContainers from "./AppContainer";
import navigationbar from "../components/navbar"
import table from "../screens/table";
import login from "../screens/login"
import dashboard from "../screens/dashboard"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import datadownload from "../screens/datadownload"
import Surveyor from "../screens/surveyor";
import App from "../screens/Addsurveyor/App"
const Routing = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={appUrls.LOGIN} component={login} />{" "}
      <Route exact path={appUrls.TABLE} component={table} />{" "}
      <Route exact path={appUrls.NAVIGATIONBAR} component={navigationbar} />
      <Route exact path={appUrls.DASHBOARD} component={dashboard} />
      <Route exact path={appUrls.DATADOWNLOAD} component={datadownload} />
      <Route exact path={appUrls.SURVEYOR} component={Surveyor} />
      <Route exact path={appUrls.ADDSURVEYOR} component={App} />
</Switch>
</BrowserRouter>
  );
};
export default Routing;
