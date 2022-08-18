import React, { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c1223e98fe1b4a6cc5ba49c2a64c0569`;

  const searchweather = async () => {
    if (location === null) {
      console.log("error");
    } else {
      let response = await fetch(url);
      let data = await response.json();

      setData(data);
      console.log(data);
    }
  };
  return (
    <>
      <div className="weather-wrapper">
        <div className="weather-container">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={searchweather}>search</button>
          </div>
          <h3>{data.name}</h3>

          <div className="weather-stats">
            {data.main ? <h1>{data.main.temp.toFixed()}° F</h1> : null}
            <div className="h4s">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} ° F</p>
              ) : null}

              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
