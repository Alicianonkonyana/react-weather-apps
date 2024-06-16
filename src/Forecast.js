import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "803fb1e4t6f6d9bf33a5f49fo2ada403";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day"> Thu</div>
          <WeatherIcon code="01d" size={34} />
          <div className="Forecast-temperatures">
            {" "}
            <span className="Forecast-max">23°C</span>{" "}
            <span className="Forecast-min">14°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
