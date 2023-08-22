import "../../pages/home/homeclinics/homeclinics.scss";
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Btn = (props) => {
  return (
    <React.Fragment>
      <Button type="primary" className="clinic__btn">
        <Link>{props.children}</Link>
      </Button>
    </React.Fragment>
  );
};

export default Btn;
