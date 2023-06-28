import React from "react";
import Container from "../../../components/container/container";
import Title from "../../../components/title/title";
import Btn from "../../../components/button/button";
import "./homedoctors.scss";
import { doctorsData } from "./../../../data/data";
import Buttoncontainer from "./../../../components/buttoncontainer/buttoncontainer";
const Homedoctors = () => {
  return (
    <React.Fragment>
      <section className="doctor">
        <Container>
          <Title>Shifokorlar</Title>
          <div className="doctor__container">
            {doctorsData?.map((doctor) => {
              return (
                <div className="doctor__container-card">
                  <div className="doctor__card-top">
                    <img
                      src={doctor.img}
                      alt="This is a doctor card img"
                      className="doctor__card-img"
                    />
                  </div>
                  <div className="doctor__card-bottom">
                    <h2 className="doctor__card-title">{doctor.name}</h2>
                    <h3 className="doctor__card-job">{doctor.job}</h3>
                    <div className="doctor__card-btn">
                      <Btn>Batafsil</Btn>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Buttoncontainer>
            <Btn>Barcha shifokorlar</Btn>
          </Buttoncontainer>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homedoctors;
