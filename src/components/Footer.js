import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();  
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="align-items-center">
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Bhuvnesh Sain</h3>
          </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BhuvneshSain"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/sain_bhuvnesh_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/917976552402"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/bhuvnesh_sain_0110/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+917976552402"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosCall  />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:bhuvnesh.office344@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMail  />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;
