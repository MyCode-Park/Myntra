import React from "react";
import { Typography } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "../Global.css";

function BestOfMyntra() {
  return (
    <div className="deal__container">
      <Typography wrap className="glb--title" variant="h4" noWrap>
        Best of myntra exclusive brands
      </Typography>

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
