import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      date: "Wednesday 12:00",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
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
          <li>{weatherData.date}</li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            {" "}
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <strong>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
            </strong>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            {" "}
            <ul>
               <li>Pressure:{weatherData.pressure} hPa</li>{" "}
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{Math.round(weatherData.wind)} km/h</li>{" "}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Lisbon";
    let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Metric`;
    axios.get(apiUrl).then(showTemperature);
    return "Loading";
  }
}
