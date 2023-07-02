import React from "react";
import "./clinic__left.scss";
import metib__clinic__location__icon from "../../../assets/images/svg/metib__clinic__location__icon.svg";
import metib__call__icon from "../../../assets/images/svg/metib__call__icon.svg";
import metib__calendar__icon from "../../../assets/images/svg/metib__calendar__icon.svg";
import Btn from "../../../components/button/button";
import { Link } from "react-router-dom";
const Clinic__left = ({clinic_info}) => {
  return (
    <React.Fragment>
      <div className="clinics__left">
        <h1 className="clinics__title">
          {clinic_info?.name}
        </h1>
        <div className="clinics__left-text">
          <div className="clinics__left-img">
            <img
              src={metib__clinic__location__icon}
              alt="This is metib location icon"
            />
          </div>
          <p className="clinics__left-description">
            Andijon, boburshoh prospekti, 56, 1-bino
          </p>
        </div>
        <div className="clinics__left-text">
          <div className="clinics__left-img">
            <img src={metib__call__icon} alt="This is a metib call icon" />
          </div>
          <p className="clinics__left-description">+998 (90) 144 26 02</p>
        </div>
        <div className="clinics__left-text">
          <div div className="clinics__left-img">
            <img
              src={metib__calendar__icon}
              alt="This is a metib calendar  icon"
            />
          </div>
          <div className="clinics__time">
            <h2 className="clinics__left-title">Ish grafigi</h2>
            <p className="clinic__left-description">
              Ish kunlari, shanba, yakshanba: 8:00 dan 21:00 gacha
            </p>
            <Link to={"#"}  className="clinics__left-link">Ochish</Link>
          </div>
        </div>
        <div className="clinics__left-buttons">
          <Btn>Qabulga yozilish</Btn>
          <Btn>Batafsil</Btn>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clinic__left;
