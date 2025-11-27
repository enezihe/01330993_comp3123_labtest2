import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [query, setQuery] = useState("");

  // Temporary hard-coded weather data for UI preview
  const exampleWeather = {
    city: "Toronto",
    temperature: 22,
    description: "Clear sky",
    humidity: 60,
    windSpeed: 3.2,
  };

  const handleSearch = () => {
    // For now, just log the query to the console
    console.log("Searching for city:", query);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Weather App</h1>

      <WeatherSearch
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      <WeatherCard
        city={exampleWeather.city}
        temperature={exampleWeather.temperature}
        description={exampleWeather.description}
        humidity={exampleWeather.humidity}
        windSpeed={exampleWeather.windSpeed}
      />
    </div>
  );
}

export default App;
