import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App from "./app.js";

const routes = (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Home} />
    <Route path="/repos/:name" component={Repos} />
    <Route path="/about" component={About} />
    <Route path="/user" component={User} />
    <Route path="/contacts" component={Contacts} /> */}
  </Route>
);

ReactDOM.render(<Router routes={routes} />, document.getElementById("root"));
