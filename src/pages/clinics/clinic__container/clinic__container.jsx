import React from "react";
import Container from "../../../components/container/container";
import "./clinic__container.scss";
const Clinic__container = (props) => {
  return (
    <React.Fragment>
      <Container>
        <div className="clinics__container">{props.children}</div>
      </Container>
    </React.Fragment>
  );
};

export default Clinic__container;
