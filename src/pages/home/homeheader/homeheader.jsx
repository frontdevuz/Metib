import React from "react";
import Container from "../../../components/container/container.jsx";
import metib__main from "../../../assets/images/svg/metib__persons.svg";
import metib__beat from "../../../assets/images/svg/metib__heart.svg";
import metib__call from "../../../assets/images/svg/metib__call.svg";
import metib__discount from "../../../assets/images/svg/metib__discount.svg";
import metib__call_icon from "../../../assets/images/svg/metib__call-icon.svg";
import metib__music from "../../../assets/images/svg/metib__music.svg";
import { Button } from "antd";
import "../../../styles/home.scss";
import { Link } from "react-router-dom";
const Homeheader = () => {
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
                    <p className="header__service-title">15 ta klinika</p>
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
                    <p className="header__service-title">Tezkor aloqa</p>
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
                    <p className="header__service-title">25% chegirma</p>
                    <p className="header__service-description">
                      Biz sodiqlik dasturiga muvofiq bonuslar bilan qaytamiz
                    </p>
                  </div>
                </div>
                <div className="header__right-container">
                  <div className="header__about-left">
                    <div className="header__about-icon">
                      <img
                        src={metib__call_icon}
                        alt="This is a metibm call icon"
                        className="header__about-call"
                      />
                    </div>
                    <p className="header__about-number">+998 90 ??? ?? ??</p>
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
                      <p className="header__about-title">24/7</p>
                      <p className="header__about-service">Xizmat</p>
                    </div>
                  </div>
                </div>
                <Link to={"./service"} className="header__btn">
                  Batafsil
                </Link>
              </div>
            </div>
            <div className="header__right">
              <img
                src={metib__main}
                alt="This is metib__persons img"
                className="header__img"
              />
            </div>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
};
export default Homeheader;
