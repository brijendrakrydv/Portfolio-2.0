import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid19 from "../../Assets/Projects/corona-tracker-social-image-1-1024x576.jpg";
import sort from "../../Assets/Projects/Sorting-Visualizer.jpg";
import fakenews from "../../Assets/Projects/fakenews.png";
import passbook from "../../Assets/Projects/passbook.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import pilot from "../../Assets/Projects/pilot.png";
import chat from "../../Assets/Projects/chat.jpeg";


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
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="Covid19 Tracker"
              ghLink="https://github.com/brijendrakrydv/Covid19-Tracker"
              demoLink="https://brijendrakrydv-covid19tracker.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              ghLink="https://github.com/brijendrakrydv/Basic-Chat-app-Backend"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              title="Sorting Visualizer"
              ghLink="https://github.com/brijendrakrydv/Sorting-Visualizer"
              demoLink="https://brijendrakrydv-sortingvisualizer.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title="Fake News Detection"
              ghLink="https://github.com/brijendrakrydv/Fake-News-Detection"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passbook}
              isBlog={false}
              title="E-Passbook"
              ghLink="https://github.com/brijendrakrydv/E-Passbook"
              demoLink="https://www.youtube.com/watch?v=9OZFGp2s2EU"              
            />
          </Col>



          /* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              ghLink="https://github.com/brijendra/"
              demoLink="Link"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pilot}
              isBlog={false}
              title="Mr. Pilot"
              ghLink="https://github.com/brijendrakrydv/Mr.Pilot"
              demoLink="Link"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
