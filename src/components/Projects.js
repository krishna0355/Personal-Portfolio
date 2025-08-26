import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// Import project images
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

// Background image
import nightSky from "../assets/img/beautiful-night-sky-with-shiny-stars.jpg";

// Other assets
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "AI Powered Resume Matcher & Builder",
      description: "React, Tailwind, jsPDF, Supabase — ATS templates, keyword/semantic scoring, auth & PDF export",
      imgUrl: projImg1,
    },
    {
      title: "Face Recognition System",
      description: "Python, Flask, NumPy, OpenCV",
      imgUrl: projImg2,
    },
    {
      title: "Online Doctor Appointment",
      description: "MySQL, HTML/CSS/JS — booking & scheduling with DB workflows and protected uploads",
      imgUrl: projImg3,
    },
  ];

  return (
    <section
      className="project"
      id="projects"
      style={{
  color: "white",
  padding: "60px 0"
}}

    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Selected work spanning full-stack web apps, ATS tooling, and workflow platforms.
                    Focus on clean UI, scalable APIs, and robust auth.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Selected work spanning full-stack web apps, ATS tooling, and workflow platforms.
                          Focus on clean UI, scalable APIs, and robust auth.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Selected work spanning full-stack web apps, ATS tooling, and workflow platforms.
                          Focus on clean UI, scalable APIs, and robust auth.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  );
};
