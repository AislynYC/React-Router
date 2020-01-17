import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./home";
class Back extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">回首頁</Link>
      </div>
    );
  }
}
export default Back;
