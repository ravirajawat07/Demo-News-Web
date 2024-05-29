import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../Providers/Theme/ThemeContext";
import WeatherContext from "../Providers/Weather/WeatherContext";
import fetchWeather from "../Providers/Weather/WeatherAction";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);

  const { weatherData, dispatch } = useContext(WeatherContext);

  const [city, setCity] = useState();

  const getWeather = async (city) => {
    const data = await fetchWeather(city);
    if (data.location) {
      dispatch({
        type: "GET_WEATHER",
        payload: data,
      });
    } else {
      window.alert("Enter Valid City Name");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("indore");
  }, []);

  if (!weatherData) {
    return (
      <div>
        <div
          className={
            dark
              ? "card rounded-0 p-3 bg-dark text-light border"
              : "card rounded-0 p-3"
          }
        >
          <h3 className="fw-bold text-center text-info">Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className={
          dark
            ? "card rounded-0 p-3 bg-dark text-light border"
            : "card rounded-0 p-3"
        }
      >
        <h3 className="fw-bold text-center text-info">Today's Weather</h3>

        <form className="my-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Enter City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className={
              dark
                ? "btn btn-dark rounded-0 float-end my-2 w-50 border"
                : "btn btn-warning rounded-0 float-end my-2 w-50"
            }
          >
            Search
          </button>
        </form>

        <div className="d-flex align-item-center justify-content-between">
          <span>
            <h1>{weatherData?.current.temp_c}°C</h1>
            <h2>{weatherData?.location.name}</h2>
          </span>

          <span className="text-center">
            <img src={weatherData?.current.condition.icon} alt="" />
            <p>{weatherData?.current.condition.text}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
