import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [nameLoopNum, setNameLoopNum] = useState(0);
  const [nameIsDeleting, setNameIsDeleting] = useState(false);
  const [nameText, setNameText] = useState('');
  const [nameDelta, setNameDelta] = useState(200 - Math.random() * 100);

  const [roleLoopNum, setRoleLoopNum] = useState(0);
  const [roleIsDeleting, setRoleIsDeleting] = useState(false);
  const [roleText, setRoleText] = useState('');
  const [roleDelta, setRoleDelta] = useState(200 - Math.random() * 100);

  const namesToRotate = ["Hi! I'm Krishna Agarwal"];
  const rolesToRotate = ["Full-Stack Developer", "C++ Coder", "Node.js Developer"];
  const period = 2000;

  // Name typing effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tickName();
    }, nameDelta);
    return () => clearInterval(ticker);
  }, [nameText]);

  // Role typing effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tickRole();
    }, roleDelta);
    return () => clearInterval(ticker);
  }, [roleText]);

  const tickName = () => {
    let i = nameLoopNum % namesToRotate.length;
    let fullText = namesToRotate[i];
    let updatedText = nameIsDeleting
      ? fullText.substring(0, nameText.length - 1)
      : fullText.substring(0, nameText.length + 1);

    setNameText(updatedText);

    if (nameIsDeleting) setNameDelta(prev => prev / 2);

    if (!nameIsDeleting && updatedText === fullText) {
      setNameIsDeleting(true);
      setNameDelta(period);
    } else if (nameIsDeleting && updatedText === '') {
      setNameIsDeleting(false);
      setNameLoopNum(nameLoopNum + 1);
      setNameDelta(500);
    }
  };

  const tickRole = () => {
    let i = roleLoopNum % rolesToRotate.length;
    let fullText = rolesToRotate[i];
    let updatedText = roleIsDeleting
      ? fullText.substring(0, roleText.length - 1)
      : fullText.substring(0, roleText.length + 1);

    setRoleText(updatedText);

    if (roleIsDeleting) setRoleDelta(prev => prev / 2);

    if (!roleIsDeleting && updatedText === fullText) {
      setRoleIsDeleting(true);
      setRoleDelta(period);
    } else if (roleIsDeleting && updatedText === '') {
      setRoleIsDeleting(false);
      setRoleLoopNum(roleLoopNum + 1);
      setRoleDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <span style={{
                      color: "#fff",
                      fontWeight: "700"
                    }}>
                      {nameText}
                    </span>
                    <br />
                    <span style={{
                      background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "1.5rem",
                      fontWeight: "500"
                    }}>
                      {roleText}
                    </span>
                  </h1>

                  <p>
                    Full-stack developer skilled in React.js, Node.js/Express, Next.js, Tailwind CSS, and MongoDB/SQL.
                    Built an AI-powered ATS resume matcher/builder and a doctor appointment platform; comfortable with
                    RESTful APIs, auth, and PDF export.
                  </p>

                  <button
                    style={{
                      background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
                      border: "none",
                      padding: "10px 20px",
                      color: "#fff",
                      borderRadius: "50px",
                      fontWeight: "500"
                    }}
                    onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Lets's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
