import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fetch from "./ajax";

const routes = (
  <Route path="/" component={Fetch}>
    {/* <IndexRoute component={Home} />
    <Route path="/repos/:name" component={Repos} />
    <Route path="/about" component={About} />
    <Route path="/user" component={User} />
    <Route path="/contacts" component={Contacts} /> */}
  </Route>
);

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById("root")
);
