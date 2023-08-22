import React from "react";
import Container from "../../components/container/container.jsx";
import { Link } from "react-router-dom";
import "./register.scss";
function Register() {
  return (
    <React.Fragment>
      <section className="form">
        <Container>
          <div className="form__container">
            <h1 className="form__title">
              Ro'yxatdan<span>o'tish</span>
            </h1>
            <form className="register">
              <input type="email" id="email" placeholder="Emailni kiriting" />
              <input
                type="text"
                id="text"
                required
                placeholder="Telefon nomer kiriting"
              />
              <input
                type="password"
                id="parol"
                required
                placeholder="Parolni kiriting"
              />
              <div className="form__button">
                <button className="form__btn">Jo'natish</button>
              </div>
              <div className="form__login">
                <Link to={"./login"}></Link>
                <Link to={"./login"}></Link>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Register;
