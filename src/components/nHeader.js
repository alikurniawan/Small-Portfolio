import React from 'react';
import { Jumbotron, Row, Col } from "reactstrap";
import logo from "../logo.svg";
import "../App.css";

const nHeader = () => (
    <Jumbotron fluid style={{ height: "5px" }}>
        <Row>
          <Col xs="1">
            <img
              src={logo}
              style={{ width: "150px", marginTop: "-50px" }}
              className="App-logo"
              alt="logo"
            />
          </Col>
          <Col>
            <p style={{marginLeft: '13px', marginTop: '-19px'}}><h2> My Small Portfolio</h2></p>
          </Col>
        </Row>
      </Jumbotron>
)
export default nHeader;