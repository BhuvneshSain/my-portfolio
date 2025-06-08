import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import karniExim from "../../Assets/Projects/karni-exim_html.png";
import karniExamReact from "../../Assets/Projects/karni-exim_react_vite_firebase.png";
import yogisha from "../../Assets/Projects/yogisha_nest_react.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard              imgPath={karniExamReact}
              isBlog={false}
              title="Karni Exim - React Version"
              description="Modern redesign of Karni Exim website using React, Vite, and Firebase. Features improved UI/UX, dynamic product catalog, responsive design, and optimized performance for better user experience."
              ghLink="https://github.com/BhuvneshSain/karni-exim"
              demoLink="https://karni-exim-new.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard              imgPath={karniExim}
              isBlog={false}
              title="Karni Exim - HTML Version"
              description="The original production website for Karni Exim built with HTML, CSS, and JavaScript. Features a professional design, product showcase, company information, and contact details."
              //ghLink="https://github.com/BhuvneshSain/karni-exim"
              demoLink="https://karniexim.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard              imgPath={yogisha}
              isBlog={false}
              title="Yogisha's Nest"
              description="An elegant e-commerce platform built with React, showcasing wellness and lifestyle products. Features a modern UI, responsive design, and seamless shopping experience."
              ghLink="https://github.com/BhuvneshSain/yogishas-nest"
              demoLink="https://yogishasnest.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
