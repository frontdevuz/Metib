import React from "react";
import metib__clinic from "../../../assets/images/svg/metib__clinic__img.svg";
import metib__parking from "../../../assets/images/svg/metib__parking__icon.svg";
import metib__evelator from "../../../assets/images/svg/metib__elevator__icon.svg";
import metib__invalid from "../../../assets/images/svg/metib__invalid__icon.svg";
import "./clinic__right.scss";

const Clinic__right = () => {
  return (
    <React.Fragment>
      <div className="clinics__right">
        <div className="clinics__container-img">
          <img src={metib__clinic} alt="This is a metib clinic img" className="clinics__right-img" />
        </div>
        <div className="clinics__right-about">
          <h2 className="clinics__right-title">
            Klinikadagi mavjud imkoniyatlar:
          </h2>
          <div className="clinics__right-text">
            <img src={metib__parking} alt="This is a metib parking" />
            <p className="clinics__right-description">
              Avtoturargohning mavjudligi
            </p>
          </div>
          <div className="clinics__right-text">
            <img src={metib__evelator} alt="This is a metib evelator" />
            <p className="clinics__right-description">
              Lift orqali klinika atrofida harakat qilish mumkin
            </p>
          </div>
          <div className="clinics__right-text">
            <img src={metib__invalid} alt="This is a metib invalid" />
            <p className="clinics__right-description">
              Nogironlar aravachasi foydalanuvchilari uchun qulayliklar
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clinic__right;
