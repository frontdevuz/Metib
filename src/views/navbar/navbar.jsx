import React from "react";
import "./navbar.scss";
import Container from "../../components/container/container.jsx";
import { Link } from "react-router-dom";
import { Button } from "antd";
import medip__search from "../../assets/images/icons/metib__search.svg";
import medip__icon from "../../assets/images/icons/metib__icon.svg";
import medip__person from "../../assets/images/icons/metib__profile.svg";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Container>
          <div className="navbar__container">
            <div className="navbar__container-left">
              <Link to={"/"} className="navbar__icon-container">
                <img
                  src={medip__icon}
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
                <img src={medip__search} alt="This is a search icon"/>
                <Button type="primary">
                  <img src={medip__person} alt="This is a medip person icon" />
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
