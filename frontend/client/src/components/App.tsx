import * as React from "react";
import AppRouter from "../router/AppRouter";
import LeftBar from "../components/LeftBar";
import { Provider } from "react-redux";
import createStore from "../redux/store/createStore";
import { Row, Col } from 'react-bootstrap';
import BackToTopBtn from "./BackToTopBtn";
// import ScrollUpButton from "react-scroll-up-button";

const App = () => {
  const store = createStore();
  return (
    <Row className="home">
      <LeftBar/>
      <Col className="col text-right rightSide">
        <div className="main-content">
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </div>
      </Col>
      <BackToTopBtn/>
    </Row>
  );
};

export default App;
