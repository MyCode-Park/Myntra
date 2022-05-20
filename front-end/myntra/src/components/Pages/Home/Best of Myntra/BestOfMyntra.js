import React from "react";
import { Typography } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "../Global.css";

function BestOfMyntra() {
  return (
    <div className='deal__container'>
      <h4 wrap className="glb--title">
        Best of myntra exclusive brands
      </h4>
      <div className="deal--list">
        <Row className="deal--listRow">
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
          <Col>
            <img src="as" className="deal--img" alt="img" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BestOfMyntra;
