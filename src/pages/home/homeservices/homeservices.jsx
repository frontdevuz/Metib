import React from "react";
import "./homeservices.scss";
import "../../home/homeclinics/homeclinics.scss";
import Container from "../../../components/container/container.jsx";
import Title from "../../../components/title/title";
import { Homeservice } from "../../../data/homeservice";
import metib__molecula from "../../../assets/images/svg/metib__bg-molecula.svg";
import metib__lung from "../../../assets/images/svg/metib__lung.svg";
import Btn from "../../../components/button/button";
import Buttoncontainer from "../../../components/buttoncontainer/buttoncontainer";
const Homeservices = () => {
  return (
    <React.Fragment>
      <section className="service">
        <Container>
          <Title>Xizmatlar</Title>
          <div className="service__container">
            {Homeservice?.map((service) => {
              return (
                <div className="service__card">
                  <img
                    src={metib__molecula}
                    alt="This is metib molecula imf"
                    className="service__img"
                  />
                  <img
                    src={metib__lung}
                    alt="This is a service icon"
                    className="service__icon"
                  />
                  <h2 className="service__title">{service.name}</h2>
                  <p className="service__description">
                    {service.descrition.slice(0, 200)}
                  </p>
                </div>
              );
            })}
          </div>
          <Buttoncontainer>
            <Btn>Barcha xizmatlar</Btn>
          </Buttoncontainer>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homeservices;
