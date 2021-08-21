import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
import "./style.scss";

import Logo from "./../../assets/logo_dark.png";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="refcue logo" />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/koszyk">
                Koszyk ({totalNumCartItems})
                <i class="fas fa-shopping-basket"></i>
              </Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to="/konto">
                  Moje konto
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                  Wyloguj się!
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </li>,
            ]}

            {!currentUser && [
              <li key={1} className="hideOnMobile">
                <Link to="/rejestracja">Rejestracja</Link>
              </li>,
              <li key={2}>
                <Link to="/login">
                  Logowanie
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>,
            ]}

            <li className="mobileMenu">
              <span onClick={() => setActiveMenu(!activeMenu)}>
                <i className="fas fa-bars"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
