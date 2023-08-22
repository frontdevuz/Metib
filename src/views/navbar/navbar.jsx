import React from "react";
import { useEffect, useState, useRef } from "react";
import "./navbar.scss";
import Container from "../../components/container/container.jsx";
import Form from "../form/form";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import metib__search from "../../assets/images/icons/metib__search.svg";
import metib__main from "../../assets/images/png/metib__main.png";
import metib__person from "../../assets/images/icons/metib__profile.svg";
import { Button } from "antd";
import { navbar } from "../../data/navbar";
import Sidebar from "../sidebar/sidebar";
import "./navbar-responsive.scss";
const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  const [isShown, setisShown] = useState(false);

  function handle_open() {
    setisShown(true);
  }
  function handle_close(params) {
    setisShown(false);
  }
  const navRef = useRef();

  const [nav, setNav] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("navbar__responsive");
    setNav(!nav);
  };
  const [bar, setBar] = useState(false);
  const OpenBar = () => setBar(!bar);

  const navClose = () => {
    navRef.current.classList.toggle("navbar__responsive");
    setNav(false);
    setBar(false);
  };
  return (
    <React.Fragment>
      <div className={nav ? "nav__back__show" : ""} onClick={navClose}></div>
      <nav className={scroll > 70 ? "navbar navbar__scrolled" : "navbar"}>
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
              <ul className="navbar__right-links" ref={navRef}>
                {navbar.map((item, index) => (
                  <NavLink
                    to={item.url}
                    className="navbar__right-link"
                    key={index}
                    onClick={navClose}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="navbar__form">
                  <div className="navbar__login-button navbar__user-cob">
                    <img src={metib__search} alt="This is a search icon" />
                    <Button
                      type="primary"
                      className="navbar__btn"
                      onClick={handle_open}
                    >
                      <img
                        src={metib__person}
                        className="navbar__person-icon"
                        alt="This is a medip person icon"
                      />
                      Shahsiy kabinet
                    </Button>
                  </div>
                </div>
              </ul>
              <button className="navbar__item__x" onClick={showNavbar}>
                <Sidebar bar={bar} OpenBar={OpenBar} />
              </button>
            </div>
          </div>
        </Container>
        {isShown ? <Form handle_close={handle_close} /> : null}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
