import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  console.log("OpenWeather API KEY:", API_KEY);

  // Handle search and call OpenWeather API
  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        query
      )}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      console.log("API response:", data); // debug in console

      if (!response.ok) {
        // Use the message from API if available
        if (data && data.message) {
          throw new Error(data.message);
        } else {
          throw new Error("Request failed");
        }
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "32px",
        background:
          "linear-gradient(135deg, #1c92d2 0%, #f2fcfe 50%, #0f172a 100%)",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "16px",
          padding: "20px",
          maxWidth: "480px",
          width: "100%",
          boxShadow: "0 18px 35px rgba(15, 23, 42, 0.25)",
        }}
      >
        <h1>Weather App</h1>

        <WeatherSearch
          query={query}
          onQueryChange={setQuery}
          onSearch={handleSearch}
        />

        {/* Show loading */}
        {isLoading && <p>Loading...</p>}

        {/* Show error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show weather card if data exists */}
        {weatherData && (
          <WeatherCard
            city={weatherData.name}
            temperature={weatherData.main.temp} // already in Celsius because of units=metric
            description={weatherData.weather[0].description}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            iconUrl={
              weatherData.weather[0].icon
                ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                : null
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
