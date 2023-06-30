import React, { useState } from "react";
import Map from "./map/Map";
import List from "./list/List";
import { clinics } from "../../data/clinic";
const Location = () => {
  const [Cards, setCards] = useState(clinics)
  return (
    <React.Fragment>
      <List Cards={Cards} setCards={setCards}  />
      <Map  Cards={Cards} setCards={setCards} />
    </React.Fragment>
  );
};

export default Location;
