import React from "react";
import Title from "../title/title";
import Search from "../homesearch/homesearch";
import "./homeclinics.scss";
import { Link } from "react-router-dom";
import metib__star from "../../assets/images/icons/metib__star.svg";
import Container from "../../components/container/container.jsx";
const Homeclinics = () => {
  return (
    <React.Fragment>
      <section className="clinic">
        <Search />
        <Title>Klinikalar</Title>
        <Container>
          <div className="clinic__container">
            <div className="clinic__container-card">
              <div className="clinic__card-top">
                <img src="" alt="This is a clinic img" />
                <div className="clinic__card-stars">
                  <img src={metib__star} alt="This is a metib star icon"/>
                  <img src={metib__star} alt="This is a metib star icon"/>
                  <img src={metib__star} alt="This is a metib star icon"/>
                  <img src={metib__star} alt="This is a metib star icon"/>
                  <img src={metib__star} alt="This is a metib star icon"/>
                </div>
              </div>
              <div className="clinic__card-bottom">
                <div className="clinic__card-title">Title</div>
                <div className="clinic__link">
                  <Link to={"/"}>Batafsil</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homeclinics;
