import React, { useState } from "react";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />;
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
