import React from "react";
import Map from "./Map/Map";
import "./home.scss";
import Homeclinics from "./homeclinics/homeclinics";
import Homeheader from "./homeheader/homeheader.jsx";
import Homeservices from "./homeservices/homeservices";

const Home = () => {
  return (
    <React.Fragment>
      <Homeheader />
      <Homeclinics />
      <Homeservices/>
      <Map />
    </React.Fragment>
  );
};

export default Home;
