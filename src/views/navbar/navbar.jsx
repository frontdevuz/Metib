import React from "react";
import { useEffect, useState } from "react";
import "./navbar.scss";
import Container from "../../components/container/container.jsx";
import { Link } from "react-router-dom";
import { Button } from "antd";

import metib__search from "../../assets/images/icons/metib__search.svg";
import metib__main from "../../assets/images/png/metib__main.png";
import metib__person from "../../assets/images/icons/metib__profile.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(scroll);
  return (
    <React.Fragment>
      <nav className={scroll > 120 ? "navbar navbar__scrolled" : "navbar"}>
        <Container>
          <div className="navbar__container">
            <div className="navbar__container-left">
              <Link to={"/"} className="navbar__icon-container">
                <img
                  src={metib__main}
                  alt="This is a medip icon"
                  className="navbar__icon"
                />
              </Link>
            </div>
            <div className="navbar__container-right">
              <ul className="navbar__right-links">
                <Link to={"/services"} className="navbar__right-link">
                  Xizmatlar
                </Link>
                <Link to={"/clinics"} className="navbar__right-link">
                  Klinikalar
                </Link>
                <Link to={"/doctors"} className="navbar__right-link">
                  Shifokorlar
                </Link>
                <Link to={"/news"} className="navbar__right-link">
                  Yangiliklar
                </Link>
                <Link to={"/location"} className="navbar__right-link">
                  Joylashuv
                </Link>
                <Link to={"/ai"} className="navbar__right-link">
                  Sun'iy ong
                </Link>
              </ul>
              <div className="navbar__login-button">
                <img src={metib__search} alt="This is a search icon" />
                <Button type="primary" className="navbar__btn">
                  <img
                    src={metib__person}
                    className="navbar__person-icon"
                    alt="This is a medip person icon"
                  />
                  Shahsiy kabinet
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
