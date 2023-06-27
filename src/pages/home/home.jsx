import React from "react";
import Map from "./Map/Map";
import "./home.scss";
import Homeclinics from "./homeclinics/homeclinics";
import Homeheader from "./homeheader/homeheader.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <Homeheader />
      <Homeclinics />
      <Map />
    </React.Fragment>
  );
};

export default Home;
