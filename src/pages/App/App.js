import "./app.css";
import Construct from "../Construct/Construct";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Statute from "../Statute/Statute";
import Rules from "../Rules/Rules";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { FooterContainer } from "../shared/shared_elements/Footer/footer";

function App() {
  return (
    <div id="main-app">
      <div id="main-content">
        <Router>
          <Route path="/" exact component={Construct}></Route>
          <Route path="/polityka-prywatnosci" component={PrivacyPolicy}></Route>
          <Route path="/regulamin" component={Statute}></Route>
          <Route path="/przepisy-21-22" component={Rules}></Route>
        </Router>
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
