import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./style.css";
import Ajax from "./ajax";

class App extends React.Component {
  splitData = () => {};
  render() {
    return (
      <Router>
        <div>
          <ul class="menu">
            <li class="menu">
              <Link to="/start">快速開始</Link>
            </li>
            <li class="menu">
              <Link to="/react">React基礎</Link>
            </li>
            <li class="menu">
              <Link to="/redux">Redux基礎</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Ajax page="home" />
          </Route>
          <Route path="/start">
            <Ajax page="start" />
          </Route>
          <Route path="/react">
            <Ajax page="react" />
          </Route>
          <Route path="/redux">
            <Ajax page="redux" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
