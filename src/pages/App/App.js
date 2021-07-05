import "./app.css";
import Construct from "../Construct/Construct";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Statute from "../Statute/Statute";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "../../shared/shared_elements/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">{/* <Construct /> */}</div>
      <Route path="/" exact component={Construct}></Route>
      <Route path="/polityka-prywatnosci" component={PrivacyPolicy}></Route>
      <Route path="/regulamin" component={Statute}></Route>
      <Footer />
    </Router>
  );
}

export default App;
