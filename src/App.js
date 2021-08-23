import "./default.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

import AdminToolbar from "./components/AdminToolbar";

import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";

//pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Order from "./pages/Order";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className="App">
      <AdminToolbar />
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
        exact
        path="/sklep"
        render={() => (
          <MainLayout>
            <Shop />
          </MainLayout>
        )}
      />
      <Route
        path="/sklep/:filterType"
        render={() => (
          <MainLayout>
            <Shop />
          </MainLayout>
        )}
      />
      <Route
        path="/produkt/:productID"
        render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )}
      />
      <Route
        path="/koszyk"
        render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )}
      />
      <Route
        path="/platnosc"
        render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
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
      <Route
        path="/rejestracja"
        render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}
      />
      <Route
        path="/odzyskaj-haslo"
        render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )}
      />
      <Route
        path="/konto"
        render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )}
      />
      <Route
        path="/zamowienie/:orderID"
        render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )}
      />
      <Route
        path="/admin"
        render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )}
      />
    </div>
  );
};

export default App;
