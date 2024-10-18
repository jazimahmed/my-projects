import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(latitude, longitude) {
    try {
      const apiKey = "8a2987eda6356fbf66a5dca46f9cbf8c"; // Use your actual API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data");
      console.error(err); // Log the error for debugging
    }
  }

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (err) => {
            setError("Unable to retrieve your location");
            console.error(err); // Log the error for debugging
          }
        );
      } else {
        setError("Geolocation is not supported by this browser");
      }
    };

    getUserLocation(); // Call the function to get user location
  }, []); // Empty array to run this effect only once

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}
