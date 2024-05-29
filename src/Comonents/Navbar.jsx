import React, { useContext, useState } from "react";
import ThemeBtn from "./ThemeBtn";
import ThemeContext from "../Providers/Theme/ThemeContext";
import NewsContext from "../Providers/News/NewsContext";
import { fetchNews } from "../Providers/News/NewsAction";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);

  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  const getNews = async (text) => {
    const allNews = await fetchNews(text);
    dispatch({
      type: "GET_NEWS",
      payload: allNews,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getNews(text);
    setText("");
  };

  return (
    <nav
      className={
        dark
          ? "navbar navbar-expand-lg  bg-dark text-primary-emphasis border"
          : "navbar navbar-expand-lg  bg-primary-subtle text-primary-emphasis"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold" href="#">
          News App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Sports")}
              >
                Sports
              </a>
            </li>

            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Politics")}
              >
                Politics
              </a>
            </li>

            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Bollywood")}
              >
                Entertainment
              </a>
            </li>

            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("International News")}
              >
                International
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button className="btn btn-outline-success mx-3" type="submit">
              Search
            </button>
            <ThemeBtn />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
