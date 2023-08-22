import React, { useState, useEffect } from "react";
import "./sidebar.scss";
const Sidebar = (props) => {
  // const [bar, setBar] = useState(false);
  // const OpenBar = () => setBar(!bar);
  return (
    <React.Fragment>
      <div className="sidebar">
        <div
          className={props.bar === false ? "open" : " open close"}
          onClick={props.OpenBar}
        >
          <span className="sidebar__menu__item" id="one"></span>
          <span className="sidebar__menu__item" id="two"></span>
          {/* <span className="sidebar__menu__item" id="three"></span> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
