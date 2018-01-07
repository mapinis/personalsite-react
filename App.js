import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";

import GeneralContainer from "./components/General.js"

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/*" component={GeneralContainer}/>
  </Router>
));