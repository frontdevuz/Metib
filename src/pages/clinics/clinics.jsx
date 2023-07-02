import React from "react";
import "../../styles/clinics.scss";
import Container from "../../components/container/container";
import Clinic__left from "./clinic__left/clinic__left";
import Clinic__right from "./clinic__right/clinic__right";
import Clinic__container from "./clinic__container/clinic__container";
import Clinic from "./clinic/clinic";
import { useLocation } from "react-router-dom";

const Clinics = () => {
  const location = useLocation();
  console.log(location.state);
  
  return (
    <React.Fragment>
      <Clinic>
        <Container>
          <Clinic__container>
            <Clinic__left clinic_info={location?.state}  />
            <Clinic__right clinic_info={location?.state} />
          </Clinic__container>
        </Container>
      </Clinic>
    </React.Fragment>
  );
};

export default Clinics;
