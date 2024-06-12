import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          className="enter-city"
          placeholder="type a city"
          autoFocus="on"
        />
        <button className="search-button" type="submit">
          {" "}
          search
        </button>
      </form>

      <h1>
        {" "}
        <strong>Lisbon</strong>
      </h1>

      <ul>
        <li>Wednesday 12:00</li>
        <li> partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather icon"
          />
          <strong>
            <span className="temperature">17</span>
          </strong>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          {" "}
          <ul>
             <li>Precipitation:15%</li> <li>Humidity:20%</li>
            <li>Wind:30 km/h</li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
