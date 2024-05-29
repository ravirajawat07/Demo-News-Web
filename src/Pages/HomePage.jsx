import React, { useContext, useEffect } from "react";
import WeatherCard from "../Comonents/WeatherCard";
import NewsCard from "../Comonents/NewsCard";
import Carousal from "../Comonents/Carousal";
import ThemeContext from "../Providers/Theme/ThemeContext";
import NewsContext from "../Providers/News/NewsContext";
import { fetchNews } from "../Providers/News/NewsAction";

const HomePage = () => {
  const { dark } = useContext(ThemeContext);
  const { allNews, dispatch } = useContext(NewsContext);

  const getNews = async () => {
    const allNews = await fetchNews("ujjain");
    dispatch({
      type: "GET_NEWS",
      payload: allNews,
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  if (!allNews || allNews.length === 0) {
    <div className="row g-3">
      <div className="col-md-4 col-sm-12">
        <WeatherCard />
      </div>
      <div className="col-md-8 col-sm-12">
       <h1 className="display-1 text-center my-3">Loading...</h1>
      </div>
    </div>;
  }

  return (
    <div
      className={dark ? "container-fluid p-5 bg-dark" : "container-fluid p-5"}
    >
      <Carousal />

      <div className="row g-3">
        <div className="col-md-4 col-sm-12">
          <WeatherCard />
        </div>
        <div className="col-md-8 col-sm-12">
          {allNews?.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
