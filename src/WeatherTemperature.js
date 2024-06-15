import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong>
          <span className="temperature">{Math.round(props.celsius)}</span>
        </strong>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showfahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong>
          <span className="temperature">{Math.round(fahrenheit)}</span>
        </strong>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
