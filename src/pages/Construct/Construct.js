import "./construct.css";

function Construct() {
  return (
    <div className="construct">
      <h1>Strona w budowie 🚧👷 Znajdź nas na facebook'u!</h1>
      <a href="https://www.facebook.com/RefCue">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/logo_dark.png"}
        ></img>
      </a>
    </div>
  );
}

export default Construct;
