import React from "react";
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
      return <p>{JSON.stringify(resObj)}</p>;
    }
  }
}

export default Ajax;
