import "./style.scss";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  emailSignInStart,
  googleSignInStart,
} from "./../../redux/User/user.actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import FormInput from "./../forms/FormInput";
import Button from "../forms/Button";
import AuthWrapper from "../AuthWrapper";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = this.state;
  //   if (email === "" || password === "") return;
  //   try {
  //     const { user } = await auth
  //       .signInWithEmailAndPassword(email, password)
  //       .catch((e) => {
  //         const err = ["Podano zły email lub hasło!"];
  //         this.setState({
  //           errors: err,
  //         });
  //       });
  //     this.setState({
  //       ...initialState,
  //     });
  //   } catch (err) {
  //     //console.log(err);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  const configAuthWrapper = {
    headline: "Zaloguj się",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Hasło"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Zaloguj się!</Button>

          <div className="socialSignIn">
            <div className="row">
              <GoogleLoginButton
                text="Zaloguj się z Google!"
                onClick={handleGoogleSignIn}
              />
            </div>
          </div>
          <div className="recoveryWrap">
            <Link to="/odzyskaj-haslo">Zapomniałeś hasła? Kliknij tutaj!</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
