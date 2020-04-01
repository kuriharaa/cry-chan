import * as React from "react";
import BodyNode from "./BodyNode";

interface IMenuBodyProps {
  items: React.ReactNode[];
}

const MenuBody: React.SFC<IMenuBodyProps> = ({ items }) => {
  return (
    <tr>
        {items.map((item, i) => <BodyNode key={i}>{item}</BodyNode>)}
    </tr>
  );
};

export default MenuBody;
