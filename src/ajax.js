import React from "react";
import Home from "./home";
import StartPage from "./start";
import ReactPage from "./react";
import ReduxPage from "./redux";
class Ajax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resObj: {},
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch(" https://cwpeng.github.io/live-records-samples/data/content.json")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          resObj: result
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  }

  render() {
    const {isLoaded, error, resObj} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (this.props.page === "home") {
        return <Home content={resObj.headline} />;
      } else if (this.props.page === "start") {
        return <StartPage content={resObj.chapters[0].sections} />;
      } else if (this.props.page === "react") {
        return <ReactPage content={resObj.chapters[1].sections} />;
      } else if (this.props.page === "redux") {
        return <ReduxPage content={resObj.chapters[2].sections} />;
      }
    }
  }
}

export default Ajax;
