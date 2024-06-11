import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Alicianonkonyana"
            target="_blank"
            rel="noreferrer"
          >
            Alicia Nonkonyana
          </a>{" "}
          is available on{" "}
          <a
            href="https://github.com/Alicianonkonyana/react-weather-apps"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://monumental-griffin-c83eff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
