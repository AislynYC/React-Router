import React from "react";
import {Link} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
