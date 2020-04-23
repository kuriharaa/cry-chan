import * as React from "react";
import { Col } from 'react-bootstrap';
import LogoBlock from "./LogoBlock";
import SocialBar from "./SocialBar";

const LeftBar = () => {
  return (
    <Col className="col-3 leftSide">
      <div className="sticky-top">
        <LogoBlock />
        <SocialBar />
      </div>
    </Col>
  );
};

export default LeftBar;
