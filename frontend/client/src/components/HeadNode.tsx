import * as React from "react";

const HeadNode: React.SFC<{ children: React.ReactNode }> = props => {
    console.log(props.children);
    return <th scope="col"><pre className="board-cat">{ props.children }</pre></th>;
};

export default HeadNode;