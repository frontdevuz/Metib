import React from "react";
import "../../../styles/clinics.scss";
const Clinic = (props) => {
  return (
    <React.Fragment>
      <header className="clinics">{props.children}</header>
    </React.Fragment>
  );
};

export default Clinic;
