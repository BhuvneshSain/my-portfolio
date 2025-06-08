import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };

  return (
    <Container fluid className="github-stats-section">
      <Row>
        <Col md={12} className="github-calendar">
          <h1 className="project-heading">
            Days I <strong className="purple">Code</strong>
          </h1>
          <div className="github-calendar-container">
            <GitHubCalendar
              username="BhuvneshSain"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
              theme={colourTheme}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h1 className="project-heading">
            My GitHub <strong className="purple">Statistics</strong>
          </h1>
        </Col>
      </Row>      <Row className="github-stats-row">
        <Col md={6} className="github-stats-card mb-4">
          <div className="github-card-wrapper">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=BhuvneshSain&theme=midnight-purple&hide_border=true&background=0D1117&stroke=0000"
              alt="GitHub Streak Stats"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={6} className="github-stats-card mb-4">
          <div className="github-card-wrapper">
            <img
              src="https://github-readme-stats.vercel.app/api?username=BhuvneshSain&show_icons=true&theme=midnight-purple&hide_border=true&bg_color=0D1117"
              alt="GitHub Stats"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>

      <Row className="github-stats-row">
        <Col md={8} className="mx-auto">
          <div className="github-card-wrapper">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=BhuvneshSain&theme=midnight-purple&hide_border=true&bg_color=0D1117&layout=compact"
              alt="Most Used Languages"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
