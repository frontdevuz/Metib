import React from "react";
import Map from "./Map/Map";

import Container from "../../components/container/container";
import metib__main from "../../assets/images/svg/metib__persons.svg";
import metib__beat from "../../assets/images/svg/metib__heart.svg";
import metib__call from "../../assets/images/svg/metib__call.svg";
import metib__discount from "../../assets/images/svg/metib__discount.svg";
import metib__call_icon from "../../assets/images/svg/metib__call-icon.svg";
import metib__music from "../../assets/images/svg/metib__music.svg";
import { Button } from "antd";
import "./home.scss";
<<<<<<< HEAD
import Homeclinics from "../../components/homeclinics/homeclinics";
=======

>>>>>>> 56d35944c96ab59d08ebf4f8c2348e9fdae2c6b8
const Home = () => {
  return (
    <React.Fragment>
      <header className="header">
        <Container>
          <div className="header__container">
            <div className="header__left">
              <h1 className="header__title">Raqamli Shifoxona</h1>
              <div className="header__left-services">
                <div className="header__service-container">
                  <div className="header__service-icon">
                    <img src={metib__beat} alt="This is a metib heart icon" />
                  </div>
                  <div className="header__service-about">
                    <h2 className="header__service-title">15 ta klinika</h2>
                    <p className="header__service-description">
                      Bizda Andijon viloyati bo'yicha 15 ta klinika mavjud
                    </p>
                  </div>
                </div>
                <div className="header__service-container">
                  <div className="header__service-icon">
                    <img src={metib__call} alt="This is a metib phone icon" />
                  </div>
                  <div className="header__service-about">
                    <h2 className="header__service-title">Tezkor aloqa</h2>
                    <p className="header__service-description">
                      Telefon yoki ilova orqali
                    </p>
                  </div>
                </div>
                <div className="header__service-container">
                  <div className="header__service-icon header__settings">
                    <img
                      src={metib__discount}
                      alt="This is a metib discount icon"
                    />
                  </div>
                  <div className="header__service-about">
                    <h2 className="header__service-title">25% chegirma</h2>
                    <p className="header__service-description">
                      Biz sodiqlik dasturiga muvofiq bonuslar bilan qaytamiz
                    </p>
                  </div>
                </div>
                <Button type="primary" className="header__btn">
                  Batafsil
                </Button>
              </div>
            </div>
            <div className="header__right">
              <img
                src={metib__main}
                alt="This is metib__persons img"
                className="header__img"
              />
              <div className="header__right-about">
                <div className="header__right-container">
                  <div className="header__about-left">
                    <div className="header__about-icon">
                      <img
                        src={metib__call_icon}
                        alt="This is a metibm call icon" className="header__about-call"
                      />
                    </div>
                    <h2 className="header__about-number">+998 90 144 26 02</h2>
                  </div>
                  <div className="header__about-right">
                    <div className="header__about-icon">
                      <img
                        src={metib__music}
                        alt="This is a metib music icon"
                        className="header__about-music"
                      />
                    </div>
                    <div className="header__about-text">
                      <h2 className="header__about-title">24/7</h2>
                      <h3 className="header__about-service">Xizmat</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
<<<<<<< HEAD
      <Homeclinics/>
=======
      <Map />
>>>>>>> 56d35944c96ab59d08ebf4f8c2348e9fdae2c6b8
    </React.Fragment>
  );
};

export default Home;
