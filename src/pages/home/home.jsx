import React from "react";
import "./home.scss";
import Map from "./Map/Map";
import Homeclinics from "./homeclinics/homeclinics";
import Homeheader from "./homeheader/homeheader.jsx";
import Homeservices from "./homeservices/homeservices";
import Homerobot from "./homerobot/homerobot";
import Homedoctors from "./homedoctors/homedoctors";

const Home = () => {
  return (
    <React.Fragment>
      <Homeheader />
      <Homeclinics />
      <Homeservices/>
      <Homerobot/>
      <Homedoctors/>
      <Map />
    </React.Fragment>
  );
};

export default Home;
