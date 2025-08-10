import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/logo.png";
import mbl from "../../Assets/web-logo-inRed.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/munim.png";
import chatify from "../../Assets/zipcode1.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/wholesale.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rate By Zipcode"
              description="A Shopify app built with React.js, HTML, CSS, and Shopify Polaris that calculates shipping charges based on distance or product weight, ensuring accurate and dynamic delivery cost estimation."
              demoLink="https://apps.shopify.com/rates-by-zipcode-iweb?ot=3b3ccb08-30f8-4c7d-8920-b3c364f6590e&search_id=4cf4d3a1-a545-4e88-a9be-cd95eebab060&surface_detail=rate+by+zipcode&surface_inter_position=1&surface_intra_position=4&surface_type=search_ad"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Wholesale Hero & B2B Pricing"
              description="A Shopify app built with React.js, HTML, CSS, and Shopify Polaris that enables store owners to set individual customer pricing and offer bulk discounts for enhanced sales and customer satisfaction."
              demoLink="https://apps.shopify.com/personalized-every-customer?search_id=b3d27f41-9eea-4f8c-b4b1-0a2f8f6057e4&surface_detail=wholesale&surface_inter_position=1&surface_intra_position=25&surface_type=search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Munnim Erp system"
              description="A comprehensive accounting and GST software suite built with React.js, HTML, CSS, Material UI React, and Reactstrap, offering efficient financial management, tax compliance, and streamlined business operations."
              demoLink="https://themunim.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            style={true}
              imgPath={leaf}
              isBlog={false}
              title="My BankLoan (Web Application)"
              description="MyBankLoan, built with React.js, Next.js, HTML, CSS, and Reactstrap, streamlines loan management by simplifying tracking, updates, and visualizing loan statuses for improved financial oversight and decision-making efficiency."
              demoLink="https://www.mybankloan.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              style={true}
              imgPath={leaf}
              isBlog={false}
              title="My BankLoan (Mobile Application)"
              description="MyBankLoan, built with Flutter, streamlines loan management by enabling easy tracking, updates, and status visualization, while also being actively maintained for bug fixes and redesigned for improved user experience."
              demoLink="https://www.mybankloan.ai/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
