import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yukti mehta </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently employed as a software developer at VSD Technologies Pvt. Ltd.
            <br />
            I have completed MSC(ca&it) at ganpat University.
            <br />
            <br />

          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to create solutions that leave an impact."{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
