import React from "react";
import Navbar from "./Comonents/Navbar";
import HomePage from "./Pages/HomePage";
import { NewsProvider } from "./Providers/News/NewsContext";
import { WeatherProvider } from "./Providers/Weather/WeatherContext";

const App = () => {
  return (
    <NewsProvider>
      <WeatherProvider>
        <Navbar />
        <HomePage />
      </WeatherProvider>
    </NewsProvider>
  );
};

export default App;
