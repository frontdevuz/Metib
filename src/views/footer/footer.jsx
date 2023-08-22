import React from "react";
import "./footer.scss";
import Container from "./../../components/container/container";
import metib__main from "../../assets/images/png/metib__main.png";
import metib__footer__location from "../../assets/images/svg/metib__footer__location.svg";
import metib__footer__call from "../../assets/images/svg/metib__footer__call.svg";
import metib__footer__email from "../../assets/images/svg/metib__footer__email.svg";
import metib__footer__instagram from "../../assets/images/svg/metib__footer__instagram.svg";
import metib__footer__youtube from "../../assets/images/svg/metib__footer__youtube.svg";
import metib__footer__facebook from "../../assets/images/svg/metib__footer__facebook.svg";
import metib__footer__telegram from "../../assets/images/svg/metib__footer__telegram.svg";
import { Link } from "react-router-dom";
import { navbar } from "../../data/navbar";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <div className="footer__container">
            <div className="footer__container-left">
              <div className="footer__logo">
                <div className="footer__left-logo">
                  <Link to={"/"}>
                    <img
                      src={metib__main}
                      alt="This is a metib logo icon"
                      className="footer__icon"
                    />
                  </Link>
                </div>
                <p className="footer__logo-text">
                  Raqamli shifoxona zamonaviy clinikalardan biri hisoblanadi.
                </p>
              </div>
              <div className="footer__left-menu">
                <p className="footer__menu-title">Menyu</p>
                {navbar.slice(0,3).map((item, index) => (
                  <Link to={item.url} className="footer__menu-link">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer__container-right">
              <di v className="footer__right-about">
                <h2 className="footer__menu-title">Ma'lumot</h2>
                <div className="footer__about-text">
                  <img
                    src={metib__footer__location}
                    alt="This is metib location icon"
                  />
                  <p className="footer__about-description">
                    Andijon viloyati, Andijon shahar Buyuk Turon 21, Avtovokzal
                    ortida.
                  </p>
                </div>
                <div className="footer__about-text">
                  <img
                    src={metib__footer__call}
                    alt="This is a metib call icon"
                  />
                  <p className="footer__about-description">+998 90 144 26 02</p>
                </div>
                <div className="footer__about-text">
                  <img
                    src={metib__footer__email}
                    alt="This is a metib email icon"
                  />
                  <p className="footer__about-description">
                    davlatovizzatillo7@gmail.com
                  </p>
                </div>
              </di>
              <div className="footer__social">
                <a
                  href="https://instagram.com"
                  className="foooter__social-icon"
                  target="_blank"
                >
                  <img
                    src={metib__footer__instagram}
                    alt="This is a footer social icon"
                  />
                </a>
                <a href="https://youtube.com" className="foooter__social-icon">
                  <img
                    src={metib__footer__youtube}
                    alt="This is a footer social icon"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  to={"https://facebook.com"}
                  className="foooter__social-icon"
                >
                  <img
                    src={metib__footer__facebook}
                    alt="This is a footer social icon"
                  />
                </a>
                <a href="https://telegram.com" className="foooter__social-icon">
                  <img
                    src={metib__footer__telegram}
                    alt="This is a footer social icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
