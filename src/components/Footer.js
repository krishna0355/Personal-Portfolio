import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: "linear-gradient(90deg, #030303ff, #0d202cff)", // 🌈 Attractive gradient
        color: "white",
        padding: "25px 0 15px 0",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Logo + Intro */}
          <Col md={4} className="mb-3 mb-md-0">
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "120px", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "13px", color: "#f0f0f0", lineHeight: "1.4", margin: 0 }}>
              Building innovative web experiences with clean design, scalable
              architecture, and modern technologies.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3 mb-md-0">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
              {[
                { name: "Home", link: "#home" },
                { name: "Projects", link: "#projects" },
                { name: "Resume", link: "#resume" },
                { name: "Contact", link: "#connect" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  <a
                    href={item.link}
                    style={{
                      color: "#f0f0f0",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "#f0f0f0")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social + Contact */}
          <Col md={4}>
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>Connect</h6>
            <div className="social-icon mb-2" style={{ display: "flex", gap: "8px" }}>
              <a
                href="https://www.linkedin.com/in/krishnaa-agarwal"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" style={{ width: "30px" }} />
              </a>
              <a
                href="https://github.com/krishna0355/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" style={{ width: "30px" }} />
              </a>
              <a href="mailto:krishnakumaragarwal99@gmail.com">
                <img src={navIcon3} alt="Email" style={{ width: "30px" }} />
              </a>
            </div>
            <p style={{ fontSize: "13px", color: "#f0f0f0", margin: "2px 0" }}>
              krishnakumaragarwal99@gmail.com
            </p>
            <p style={{ fontSize: "13px", color: "#f0f0f0", margin: "2px 0" }}>
              +91 7004225387
            </p>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.3)", margin: "15px 0" }} />

        <Row>
          <Col
            className="text-center"
            style={{ fontSize: "12px", color: "#f0f0f0" }}
          >
            © {new Date().getFullYear()} Krishna Agarwal. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
