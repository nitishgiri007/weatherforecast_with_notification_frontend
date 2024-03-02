import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          "http://localhost:3001/?address=ranchi"
        );
        console.log("Response:", response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchWeather();
  }, []);

  console.log("Data:", data);

  return (
    <div className="app">
      {data ? (
        <div>
          <p>City: {data.city}</p>
          <p>Weather: {data.weather}</p>
          <p>Wind Speed: {data.wind_speed}</p>
          <p>Min Temperature: {data.temp_min}</p>
          <p>Max Temperature: {data.temp_max}</p>

          {data.data && (
            <div>
              <p>Country: {data.data.sys.country}</p>
              <p>Temperature: {data.data.main.temp}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
