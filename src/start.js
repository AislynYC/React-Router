import React from "react";
import Back from "./back";

const StartPage = props => {
  return (
    <div>
      <ul>
        <li> {props.content[0]}</li>
        <li> {props.content[1]}</li>
      </ul>
      <Back />
    </div>
  );
};
export default StartPage;
