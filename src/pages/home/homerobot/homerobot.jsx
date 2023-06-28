import React from "react";
import Container from "../../../components/container/container.jsx";
import metib__robot from "../../../assets/images/svg/metib__robot.svg";
import "./homerobot.scss";
import Btn from "../../../components/button/button.jsx";
const Homerobot = () => {
  return (
    <React.Fragment>
      <section className="robot">
        <Container>
          <div className="robot__container">
            <div className="robot__left">
              <h3 className="robot__title">Raqamli shifoxona</h3>
              <p className="robot__description">
                An’anaviy shifoxona tizimidagi muammolarga raqamli yechim
                beramiz.
              </p>
              <Btn>Batafsil</Btn>
            <div className="robot__center"></div>
            </div>
            <div className="robot__right">
              <img
                src={metib__robot}
                alt="This is a metib robot img"
                className="robot__right-img"
              />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homerobot;
