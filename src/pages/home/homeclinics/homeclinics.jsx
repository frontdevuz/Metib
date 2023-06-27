import React from "react";
import Title from "../../../components/title/title.jsx";
import Search from "../homesearch/homesearch.jsx";
import "./homeclinics.scss";
import { Link } from "react-router-dom";
import metib__star from "../../../assets/images/icons/metib__star.svg";
import Container from "../../../components/container/container.jsx";
import { clinics } from "./../../../data/clinic";
import Btn from "../../../components/button/button.jsx";
import Buttoncontainer from "../../../components/buttoncontainer/buttoncontainer.jsx";

const Homeclinics = () => {
  return (
    <React.Fragment>
      <section className="clinic">
        <Container>
          <Search />
          <Title>Klinikalar</Title>
          <div className="clinic__container">
            {clinics?.map((item) => {
              return (
                <div className="clinic__container-card">
                  <div className="clinic__card">
                    <div className="clinic__card-top">
                      <img
                        src={item.img}
                        alt="This is a clinic img"
                        className="clinic__card-img"
                      />
                      <div className="clinic__card-stars">
                        <img
                          src={metib__star}
                          alt="This is a metib star icon"
                        />
                        <img
                          src={metib__star}
                          alt="This is a metib star icon"
                        />
                        <img
                          src={metib__star}
                          alt="This is a metib star icon"
                        />
                        <img
                          src={metib__star}
                          alt="This is a metib star icon"
                        />
                        <img
                          src={metib__star}
                          alt="This is a metib star icon"
                        />
                      </div>
                    </div>
                    <div className="clinic__card-bottom">
                      <div className="clinic__card-title">{item.name}</div>
                      <Link to={"/"} className="clinic__link">
                        Batafsil
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Buttoncontainer>
            <Btn>Barcha kliniklar</Btn>
          </Buttoncontainer>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homeclinics;
