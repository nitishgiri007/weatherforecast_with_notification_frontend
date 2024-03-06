import React, { useState, useEffect } from "react";
import axios from "axios";

const imageUrl = "/background.jpg";

function App() {
  const [data, setData] = useState(null);

  const mainDivStyle = {
    margin: 0,
    padding: 0,
    display: "flex",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };
  const card = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    width: "500px",
    height: "500px",
    gap:"5px",
    background: "rgb(227 227 227 / 26%)",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };
  const headingTag = {
    fontSize: "25px",
    marginTop:"50px",
 
  };
  const location = {
    marginTop:"5px",
    width : "450px",
    height: "30px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: '14px', // Rounded corners
    border: 'none', // No border
    padding: '10px', // Adjust padding as needed
    boxSizing: 'border-box',
  }
  const phoneNumber = {
    marginTop:"5px",
    width : "450px",
    height: "30px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: '14px', // Rounded corners
    border: 'none', // No border
    padding: '10px', // Adjust padding as needed
    boxSizing: 'border-box',
  }
  const button = {
    marginTop:"20px",
    width : "250px",
    height: "30px",
    background:"red",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: '14px', 
    border: 'none', 
    padding: '10px',
    boxSizing: 'border-box',
  }

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
    <div className="app" style={mainDivStyle}>
      <div className="card" style={card}>
        <div className="heading tag" style={headingTag}>
         
          Please Enter the Location and Phone number
        </div>
        <div><input name="location" style={location} ></input></div>
        <div><input name="phoneNumber" style={phoneNumber} ></input></div>
        <div><button style={button}>Click here</button></div>
      </div>

      {/* {data ? (
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
      )} */}
    </div>
  );
}

export default App;
