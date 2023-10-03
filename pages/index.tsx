import React from "react";
import { SimpleButtonReact } from "../components/simple-button-react";

const Thing: React.FC<{ msg: string }> = (props) => {
  return <div>{props.msg}</div>;
};

export default () => (
  <div>
    <SimpleButtonReact></SimpleButtonReact>
    Hello World. <Thing msg="hello" />
  </div>
);
