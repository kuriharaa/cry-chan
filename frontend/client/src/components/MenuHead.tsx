import * as React from "react";
import HeadNode from "./HeadNode";

interface IMenuHeadProps {
  items: string[];
}

const MenuHead: React.SFC<IMenuHeadProps> = ({ items }) => {
  return (
    <thead>
        <tr>
            {items.map((item) => <HeadNode> { item } </HeadNode>)}
        </tr>
    </thead>
  );
};

export default MenuHead;
