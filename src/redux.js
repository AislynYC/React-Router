import React from "react";
import Back from "./back";

const ReduxPage = props => {
  return (
    <div>
      <ul>
        <li> {props.content[0]}</li>
        <li> {props.content[1]}</li>
        <li> {props.content[2]}</li>
      </ul>
      <Back />
    </div>
  );
};

export default ReduxPage;
