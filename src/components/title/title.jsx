import React from "react";
import metib__puls from "../../assets/images/svg/metib__beat.svg";
import "./title.scss"
const Title = (props) => {
  return (
    <React.Fragment>
      <div className="title">
        <div className="title__container-img">
          <img
            src={metib__puls}
            alt="This is a metib puls icon"
            className="title__img"
          />
        </div>
        <p className="title__title">{props.children}</p>
      </div>
    </React.Fragment>
  );
};

export default Title;
