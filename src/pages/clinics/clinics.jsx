import React from "react";
import "../../styles/clinics.scss";
import Container from "../../components/container/container";
import Clinic__left from "./clinic__left/clinic__left";
import Clinic__right from "./clinic__right/clinic__right";
import Clinic__container from "./clinic__container/clinic__container";
import Clinic from "./clinic/clinic";
const Clinics = () => {
  return (
    <React.Fragment>
      <Clinic>
        <Container>
          <Clinic__container>
            <Clinic__left />
            <Clinic__right />
          </Clinic__container>
        </Container>
      </Clinic>
    </React.Fragment>
  );
};

export default Clinics;
