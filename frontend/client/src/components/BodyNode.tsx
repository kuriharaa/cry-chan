import * as React from "react";

const BodyNode: React.SFC<{ children: React.ReactNode }> = props => {
  return <td>{props.children}</td>;
};

export default BodyNode;
