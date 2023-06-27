import "../../pages/home/homeclinics/homeclinics.scss";
import React from "react";
import { Button } from "antd";
const Btn = (props) => {
  return (
    <React.Fragment>
      <Button type="primary" className="clinic__btn">
        {props.children}
      </Button>
    </React.Fragment>
  );
};

export default Btn;
