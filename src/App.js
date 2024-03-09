import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const imageUrl = "/background.jpg";

function App() {
  const [data, setData] = useState(null);
  const [place, setPlace] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [loading, setLoading] = useState(false);

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
    alignItems: "center",
    width: "500px",
    height: "500px",
    gap: "5px",
    fontFamily: "cursive",
    background: "rgb(227 227 227 / 26%)",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };
  const headingTag = {
    fontSize: "25px",
    marginTop: "50px",
  };
  const location = {
    marginTop: "5px",
    width: "450px",
    height: "30px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "14px",
    border: "none",
    padding: "10px",
    boxSizing: "border-box",
  };
  const phoneNumber = {
    marginTop: "5px",
    width: "450px",
    height: "30px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "14px",
    border: "none",
    padding: "10px",
    boxSizing: "border-box",
  };
  const button = {
    marginTop: "20px",
    width: "250px",
    height: "30px",
    background: "#25e1fb0f",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "14px",
    border: "none",
    padding: "10px",
    boxSizing: "border-box",
    fontFamily: "cursive",
    color:"white"

  };

  async function fetchWeather(place, phoneNumbers) {
    console.log("in function", place, phoneNumbers);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://weatherforecast-with-notification-backend.onrender.com/getweatherreport",
        {
          address: place,
          phonenumber: phoneNumbers,
        }
      );
      console.log("Response:", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }
  const handleWeather = (e) => {
    console.log(e.target.value);
    setPlace(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    console.log(e.target.value);
    setPhoneNumbers(e.target.value);
  };
  const handleOnclick = () => {
    fetchWeather(place, phoneNumbers);
  };

  // if (loading) {
  //   return <CircularProgress />;
  // }

  return (
    <div className="app" style={mainDivStyle}>
      {loading && (
        <CircularProgress
          size={60}
          style={{
            position: "absolute",
            top: "52%",
            left: "45%",
          }}
        />
      )}

      {data ? (
        <div style={card}>
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
        <div className="card" style={card}>
          <div className="heading tag" style={headingTag}>
            Please Enter the Location and Phone number
          </div>
          <div>
            <input
              name="location"
              style={location}
              value={place}
              onChange={(e) => handleWeather(e)}
            ></input>
          </div>
          <div>
            <input
              name="phoneNumber"
              style={phoneNumber}
              value={phoneNumbers}
              onChange={(e) => {
                handlePhoneNumber(e);
              }}
            ></input>
          </div>
          <div>
            <button style={button} onClick={handleOnclick}>
              Click here
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
