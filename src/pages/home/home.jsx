import React from "react";
import "./home.scss";
import Homeclinics from "./homeclinics/homeclinics";
import Homeheader from "./homeheader/homeheader.jsx";
import Homeservices from "./homeservices/homeservices";
import Homerobot from "./homerobot/homerobot";
import Homedoctors from "./homedoctors/homedoctors";
import Homenews from "./homenews/homenews";
import Homemap from './Map/Map';
const Home = () => {
  return (
    <React.Fragment>
      <Homeheader />
      <Homeclinics />
      <Homeservices/>
      <Homerobot/>
      <Homedoctors/>
      <Homenews/>
      <Homemap/>
    </React.Fragment>
  );
};

export default Home;
