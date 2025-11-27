import React from "react";

const WeatherCard = ({ city, temperature, description, humidity, windSpeed }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.city}>{city}</h2>
      <p style={styles.temp}>
        {temperature}°C
      </p>
      <p style={styles.description}>{description}</p>

      <div style={styles.extraRow}>
        <div>
          <strong>Humidity:</strong> {humidity}%
        </div>
        <div>
          <strong>Wind:</strong> {windSpeed} m/s
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginTop: "16px",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
  },
  city: {
    margin: 0,
    fontSize: "20px",
  },
  temp: {
    margin: "8px 0",
    fontSize: "28px",
    fontWeight: "bold",
  },
  description: {
    margin: "4px 0 12px",
    fontStyle: "italic",
    color: "#475569",
  },
  extraRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#0f172a",
  },
};

export default WeatherCard;
