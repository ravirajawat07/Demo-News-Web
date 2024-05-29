import React, { useContext } from "react";
import NewsContext from "../Providers/News/NewsContext";
import CarousalItem from "./CarousalItem";

const Carousal = () => {
  const { allNews } = useContext(NewsContext);

  if (!allNews || allNews.length === 0) {
    return (
      <div className="container p-5">
        <h1 className="display-1 text-center text-secondary my-3">Somthing Went Wrong...</h1>
      </div>
    );
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-2">
      <div className="carousel-inner">
        {allNews.map((news, index) => (
          <CarousalItem key={index} news={news} active={index} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
