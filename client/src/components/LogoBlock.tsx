import * as React from "react";
import { Row, Col } from 'react-bootstrap';

const LogoBlock = () => {
  return (
    <Row>
        <Col className="col justify-content-center text-center logo-block">
          <a href="/">
            <img src="assets/img/cry.svg" className="img-fluid" height="57%" width="57%"/>
            <p className="logo-label">c r y - c h a n</p>
          </a>
        </Col>
    </Row>
  );
};

export default LogoBlock;
