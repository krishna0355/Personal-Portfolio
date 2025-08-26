import { Container, Row, Col } from "react-bootstrap";

export const ResumeSection = () => {
  return (
    <section
      className="resume-section"
      id="resume"
    >
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h2>My Resume</h2>
            <p>
              Want to know more about my skills, experience, and projects?
              Download or view my latest resume below.
            </p>
            <a
              href="/Krishna_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: "10px 25px",
                borderRadius: "25px",
                fontWeight: "500",
                background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
                border: "none",
              }}
            >
              View Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
