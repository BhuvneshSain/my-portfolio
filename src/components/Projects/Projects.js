import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import karniExamReact from "../../Assets/Projects/karni-exim_react_vite_firebase.png";
import yogisha from "../../Assets/Projects/yogisha_nest_react.png";
import subhPortfolio from "../../Assets/Projects/subh-portfolio.png"; // Note: You may need to replace this with the actual image from the chat

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subhPortfolio}
              isBlog={false}
              isNew={true}
              title="Subhashish's Portfolio"
              description="A modern, responsive portfolio website built with React.js. Features smooth animations, dark theme UI, interactive elements, and showcases developer skills and projects in an elegant layout."
              ghLink="https://github.com/BhuvneshSain/subh-portfolio"
              demoLink="https://subhashish.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karniExamReact}
              isBlog={false}
              title="Karni Exim - React Version"
              description="Modern redesign of Karni Exim website using React, Vite, and Firebase. Features improved UI/UX, dynamic product catalog, responsive design, and optimized performance for better user experience."
              ghLink="https://github.com/BhuvneshSain/karni-exim"
              demoLink="https://karniexim.com"
            />
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yogisha}
              isBlog={false}
              isNew={true}
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
