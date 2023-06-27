import React from "react";
import { Button } from "antd";
import metib__search from "../../../assets/images/icons/metib__search-white.svg";
import "./homesearch.scss";
const Search = () => {
  return (
    <React.Fragment>
      <div className="search">
          <div className="search__container">
            <input
              type="search"
              className="search__container-inp"
              placeholder="Qidiruv..."
            />
            <Button type="primary" className="search__btn">
              <img src={metib__search} alt="This is a metib search icon" className="search__icon-btn" />
              Qidiruv
            </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
