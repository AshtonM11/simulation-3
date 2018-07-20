import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Auth from "./component/Auth";
import Form from "./component/Form";
import Post from "./component/Post";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/post/:postid" component={Post} />
      <Route path="/new" component={Form} />
    </Switch>
  </BrowserRouter>
);
