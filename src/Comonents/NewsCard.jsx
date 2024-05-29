import React, { useContext } from "react";
import ThemeContext from "../Providers/Theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={
          dark
            ? "card rounded-0 p-3 mb-3 bg-dark text-light border"
            : "card rounded-0 p-3 mb-3"
        }
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              style={{ height: "250px", objectFit: "cover" }}
              src={
                news.urlToImage
                  ? news.urlToImage
                  : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              }
              className="img-fluid rounded-0"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">{news.author}</small>
                <br />
                <small className="text-body-secondary">
                  {new Date(news.publishedAt).toDateString("en-in")}
                </small>
              </p>

              <a
                href={news.url}
                target="blank"
                className={
                  dark
                    ? "btn btn-sm btn float-end bg-dark text-light border"
                    : "btn btn-sm btn btn-outline-primary float-end"
                }
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
