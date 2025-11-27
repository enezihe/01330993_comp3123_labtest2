import React from "react";

const WeatherCard = ({
  city,
  temperature,
  description,
  humidity,
  windSpeed,
  iconUrl,
}) => {
  return (
    <div style={styles.card}>
      {/* Header row with city + weather icon */}
      <div style={styles.headerRow}>
        <div>
          <h2 style={styles.city}>{city}</h2>
          <p style={styles.description}>{description}</p>
        </div>

        {/* Weather icon */}
        {iconUrl && (
          <img
            src={iconUrl}
            alt={description || "Weather icon"}
            style={styles.icon}
          />
        )}
      </div>

      {/* Temperature */}
      <p style={styles.temp}>{temperature}°C</p>

      {/* Humidity + Wind */}
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
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    border: "1px solid #1e293b",
    maxWidth: "420px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  city: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
  },
  description: {
    margin: "4px 0 0",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#cbd5f5",
  },
  temp: {
    margin: "0 0 16px",
    fontSize: "34px",
    fontWeight: "bold",
  },
  extraRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  icon: {
    width: "72px",
    height: "72px",
  },
};

export default WeatherCard;
