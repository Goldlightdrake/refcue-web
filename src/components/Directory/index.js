import React from "react";
import Logo from "./../../assets/logo_dark.png";
import "./style.scss";

import Button from "../forms/Button";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="directory-wrapper">
        <img src={Logo} className="logo" alt="refcue-logo"></img>
        <a href="/sklep">
          <Button>Sklep</Button>
        </a>
      </div>
    </div>
  );
};

export default Directory;
