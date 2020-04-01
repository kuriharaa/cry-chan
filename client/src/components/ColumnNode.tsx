import * as React from "react";

const ColumnNode: React.SFC<{ children: React.ReactNode }> = props => {
  return <td>{props.children}</td>;
};

export default ColumnNode;
