import * as React from "react";
import ColumnNode from "./ColumnNode";

interface IColumnProps {
  items: React.ReactNode[];
}

const Column: React.SFC<IColumnProps> = ({ items }) => {
  return (
    <tr>
      {items.map((item, i) => <ColumnNode key={i}>{item}</ColumnNode>)}
    </tr>

    // <ul className="column">
    //   <li className="column__heading">{headingMessage}</li>
    //   {items.map((item, i) => <ColumnNode key={i}>{item}</ColumnNode>)}
    // </ul>
  );
};

export default Column;
