import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Signup from "./Components/Signup/Signup";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={Signup} />
    <Route paht="/details" component={Details} />
  </Switch>
);
