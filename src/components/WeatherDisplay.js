import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div>
      <h2>{city}</h2>
      <img src={iconUrl} alt={description} />
      <p>{temp}°C</p>
      <p>{description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
