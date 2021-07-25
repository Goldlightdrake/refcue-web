import firebase from "firebase";
import { useEffect } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import Cookies from "universal-cookie";
import "./rules.css";

function Rules() {
  const firebaseConfig = {
    apiKey: "AIzaSyBULhLFqLFefe055cuzPsrIcXp0mqX0NqA",
    authDomain: "refcue-1793c.firebaseapp.com",
    databaseURL: "https://refcue-1793c.firebaseio.com",
    projectId: "refcue-1793c",
    storageBucket: "refcue-1793c.appspot.com",
    messagingSenderId: "632003054989",
    appId: "1:632003054989:web:4e259b8381fcca317981c4",
    measurementId: "G-DMRVZ2T3P3",
  };

  firebase.initializeApp(firebaseConfig);
  const cookies = new Cookies();

  var storage = firebase.storage();
  var pathReference = storage.ref("przepisy-21-22.pdf");

  useEffect(() => {
    if (!cookies.get("rules-download")) {
      pathReference.getDownloadURL().then((url) => {
        axios
          .get("https://cors-anywhere.herokuapp.com/" + url, {
            responseType: "blob",
          })
          .then((res) => {
            fileDownload(res.data, "Przepisy-21-22.pdf");
          });
      });
    }
    cookies.set("rules-download", true, { path: "/" });
  }, []);
  return (
    <div id="rules">
      <img
        className="logo-rules"
        src={process.env.PUBLIC_URL + "/assets/images/logo_dark.png"}
      ></img>
      <h2 className="text-rules">Pobrałeś przepisy na nowy sezon!</h2>
    </div>
  );
}

export default Rules;
