import "./style.scss";
import { Link } from "react-router-dom";

import Logo from "./../../assets/logo_dark.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/polityka-prywatnosci">Sklep</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
