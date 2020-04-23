import * as React from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const LogoBlock = () => {
  return (
    <Row>
        <Col className="col justify-content-center text-center logo-block">
          <a href="/">
          {/* <Link to='/' innerRef={this.refCallback}> */}
            <img src="/assets/img/cry.svg" className="img-fluid" height="57%" width="57%"/>
            <p className="logo-label">c r y - c h a n</p>
          {/* </Link> */}
          </a>
        </Col>
    </Row>
  );
};

export default LogoBlock;
