import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/common-section.css";
const CommonSection = ({ title }) => {
  return (
    <>
      <section className="common__section">
        <Container>
          <h1 className="common_title">{title}</h1>
        </Container>
      </section>
    </>
  );
};

export default CommonSection;
