import React from "react";
import { Switch, Route } from "react-router-dom";
import Class from "./components/Class";
import Functional from "./components/Functional";

export default (
    <Switch>
        <Route path='/Class' component={Class} />
        <Route path='/Functional' component={Functional} />
    </Switch>
)