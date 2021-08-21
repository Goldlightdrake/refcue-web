import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUpUserStart } from "./../../redux/User/user.actions";
import "./style.scss";

import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import AuthWrapper from "./../AuthWrapper";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") return;
    dispatch(
      signUpUserStart({
        email,
        password,
        confirmPassword,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Rejestracja",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index} className="errorMessage">
                  {err}
                </li>
              );
            })}
          </ul>
        )}
        <form action="" onSubmit={handleFormSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Hasło"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Powtórz hasło"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Zarejestruj się!</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signup;