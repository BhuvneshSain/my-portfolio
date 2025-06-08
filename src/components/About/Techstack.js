import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
  DiPython,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiVite,
  SiDjango,
  SiFirebase,
  SiTailwindcss,
  SiFlask,
  SiExpress,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";
import { initializeCardEffects } from "./CardEffect";

const TechStack = () => {
  useEffect(() => {
    initializeCardEffects();
  }, []);

  const technologies = {
    "Frontend Development": [
      { icon: DiHtml5, name: "HTML5" },
      { icon: DiCss3, name: "CSS3" },
      { icon: DiJavascript1, name: "JavaScript" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    "Frontend Frameworks": [
      { icon: DiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
    ],
    "Backend Development": [
      { icon: DiPython, name: "Python" },
      { icon: SiDjango, name: "Django" },
      { icon: SiFlask, name: "Flask" },
      { icon: DiNodejs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
    ],
    "Database & DevOps": [
      { icon: SiMysql, name: "MySQL" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: DiGit, name: "Git" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  };

  return (
    <Row className="tech-stack-container">
      {Object.entries(technologies).map(([category, skills]) => (
        <div key={category} className="tech-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="tech-icon-card" title={skill.name}>
                  <Icon />
                  <span className="tech-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </Row>
  );
};

export default TechStack;
