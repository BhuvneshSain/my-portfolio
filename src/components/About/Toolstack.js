import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiJupyter,
  SiGooglecolab,
  SiNetlify,
  SiGithub,
  SiHeroku,
  SiNpm,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { initializeCardEffects } from "./CardEffect";

const Toolstack = () => {
  useEffect(() => {
    initializeCardEffects();
  }, []);

  const tools = {
    "Development Environment": [
      { icon: FaWindows, name: "Windows" },
      { icon: SiVisualstudiocode, name: "VS Code" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiNpm, name: "npm" },
    ],
    "Data Science Tools": [
      { icon: SiJupyter, name: "Jupyter" },
      { icon: SiGooglecolab, name: "Google Colab" },
    ],
    "Deployment Platforms": [
      { icon: SiNetlify, name: "Netlify" },
      { icon: SiVercel, name: "Vercel" },
      { icon: SiHeroku, name: "Heroku" },
    ],
  };

  return (
    <Row className="tech-stack-container">
      {Object.entries(tools).map(([category, items]) => (
        <div key={category} className="tech-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="tech-icon-card" title={item.name}>
                  <Icon />
                  <span className="tech-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </Row>
  );
};

export default Toolstack;
