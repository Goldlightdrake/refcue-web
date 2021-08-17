import "./default.scss";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        exact
        render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
      />
      <Route
        path="/polityka-prywatnosci"
        render={() => (
          <MainLayout>
            <PrivacyPolicy />
          </MainLayout>
        )}
      />
    </div>
  );
}

export default App;
