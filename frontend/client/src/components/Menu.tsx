import * as React from "react";

interface IMenuProps {
    children?: React.ReactNode;
  }

const Menu: React.SFC<IMenuProps> = ({ children }) => {
  return (
    <div className="row menu">
        <table className="table table-borderless w-100 text-center">
            { children }
        </table>
    </div>
  );
};

export default Menu;
