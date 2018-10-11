import React from "react";
import { Switch, Route } from "react-router-dom";

import Details from "./Components/Details/Details";
import Products from "./Components/Products/Products";

export default (
  <Switch>
    <Route path="/" exact component={Products} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);
