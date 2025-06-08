import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

  SiVercel,

  SiJupyter ,
  SiGooglecolab ,
  SiNetlify,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows
 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
