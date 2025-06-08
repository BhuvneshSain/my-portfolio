import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>            Hi Everyone, I am <span className="purple">Bhuvnesh Sain </span>
            from <span className="purple">Bikaner, India.</span>
            <br />
            I am currently working as a Basic Computer Instructor at Govt Sr. Sec. School, Sherera, Bikaner.
            <br />
            I am also a freelance web developer specializing in creating modern web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           “Code is the canvas, logic is the brush.."{" "}
          </p>
          <footer className="blockquote-footer">Bhuvnesh Sain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
