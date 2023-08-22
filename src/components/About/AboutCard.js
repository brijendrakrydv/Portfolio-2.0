import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize: "21px" }}>
            Hi Everyone, I am <span className="purple">Brijendra Kumar Yadav </span>
            from <span className="purple"> Lucknow, Uttar Pradesh, India.</span>
            <br /> <br /> I have completed my B.Tech in CSE from <span className="purple">Galgotia college of Engineering & Technology</span> in 2022.
            <br /> <br />
            I am currently working as <span className="purple">Software Engineer</span> at <span className="purple">ConsultAdd Services Private Limited.</span>
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
