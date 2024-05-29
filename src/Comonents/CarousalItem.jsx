import React from "react";

const CarousalItem = ({ news, active }) => {
  return (
    <div className={active === 0 ? "carousel-item active" : "carousel-item "}>
      <img
        style={{ height: "50vh", objectFit: "cover" }}
        src={news.urlToImage}
        className="d-block w-100"
        alt="..."
      />
    </div>
  );
};

export default CarousalItem;
