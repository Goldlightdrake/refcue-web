import React from "react";
import Logo from "./../../assets/logo_dark.png";
import "./style.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="directory-wrapper">
        <img src={Logo} className="logo"></img>
        <div className="button-container">
          <a href="/" className="shop-button">
            Sklep
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
