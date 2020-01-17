import React from "react";
import Ajax from "./ajax";
import Back from "./back";

class ReactPage extends React.Component {
  render() {
    return (
      <div>
        <Ajax />
        <Back />
      </div>
    );
  }
}
export default ReactPage;
