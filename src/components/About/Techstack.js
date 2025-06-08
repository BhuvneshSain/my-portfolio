import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiVite,
  SiPython,
  SiDjango,
  SiFirebase,

} from "react-icons/si";
;

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  );
}

export default Techstack;
