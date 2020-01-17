import React from "react";
import Back from "./back";

const ReduxPage = props => {
  let list = props.content.map((item, index) => <li key={index}> {item} </li>);
  return (
    <div>
      <ul>{list}</ul>
      <Back />
    </div>
  );
};

export default ReduxPage;
