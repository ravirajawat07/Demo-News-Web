const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fd316c813aa940acbe390518241005&q=${city}&aqi=yes`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    window.alert(error);
    return error.message;
  }
};

export default fetchWeather;
