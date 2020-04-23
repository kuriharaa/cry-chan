import * as React from "react";

const SocialBar = () => {
  return (
    <div className="navbar fixed-bottom justify-content-center line bottom-bar pb-4">
        <div className="row">
            <a href="">
                <span className="soc soc-git"></span>
            </a>
            <a href="">
              <span className="soc soc-twitter"></span>
            </a>
            <a href="">
              <span className="soc soc-dis"></span>
            </a>
        </div>
    </div>
  );
};

export default SocialBar;
