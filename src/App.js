import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(url).then(showWeather);
  };

  function showWeather(response) {
    setWeather(response.data);
  }
  const getIconUrl = (iconCode) => {
    return `https://api.openweathermap.org/img/w/${iconCode}.png`;
  };
  return (
    <div>
      <form className="searchBox" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="searchButton" type="submit" />
      </form>
      <div>
        {weather && (
          <div>
            <ul>
              <li>Weather in {weather.name}</li>
              <li>Temperature: {Math.round(weather.main.temp)}°C</li>
              <li>Humidity: {weather.main.humidity}%</li>
              <img
                src={getIconUrl(weather.weather[0].icon)}
                alt="Weather Icon"
              />
            </ul>
          </div>
        )}
      </div>
      <div className="gitLink">
        <a href="https://github.com/lilianastrajescu/Search-form-react-exercise">
          GIT Project Link
        </a>
      </div>
    </div>
  );
}
