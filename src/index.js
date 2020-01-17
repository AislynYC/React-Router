import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./home";
import StartPage from "./start";
import ReactPage from "./react";
import ReduxPage from "./redux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/start">快速開始</Link>
            </li>
            <li>
              <Link to="/react">React基礎</Link>
            </li>
            <li>
              <Link to="/redux">Redux基礎</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/start">
            <StartPage />
          </Route>
          <Route path="/react">
            <ReactPage />
          </Route>
          <Route path="/redux">
            <ReduxPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
