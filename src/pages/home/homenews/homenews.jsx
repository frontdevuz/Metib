import React from "react";
import metib__news from "../../../assets/images/svg/metib__news.svg";
import Container from "../../../components/container/container";
import { homeNumber } from "./../../../data/homenumber";
import "./homenews.scss";
import Title from "../../../components/title/title";
import Buttoncontainer from "./../../../components/buttoncontainer/buttoncontainer";
import Btn from "../../../components/button/button";
import metib__molecula from "../../../assets/images/svg/metib__bg-molecula.svg";
import { Link } from "react-router-dom";
const Homenews = () => {
  return (
    <React.Fragment>
      <section className="news">
        <Container>
          <Title>Yangiliklar</Title>
          <div className="news__container">
            {homeNumber?.map((news) => {
              return (
                <div className="news__card">
                  <img
                    src={metib__molecula}
                    alt="This is a metib molecula img"
                    className="news__img"
                  />
                  <div className="news__card-top">
                    <img
                      src={metib__news}
                      alt="This is a news card img"
                      className="news__card-img"
                    />
                    <span className="news__span">{news.number}</span>
                  </div>
                  <div className="news__card-bottom">
                    <p className="news__title">
                      Shifoxonamizning so'ngi yangliklari
                    </p>
                    <p className="news__text">
                      Risus fringilla curabitur dui nibh ipsum velit lacus.
                      Integer morbi massa libero ultrices elit congue ac orci.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Buttoncontainer>
            <Btn>
              Barcha yangiliklar
            </Btn>
          </Buttoncontainer>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homenews;
