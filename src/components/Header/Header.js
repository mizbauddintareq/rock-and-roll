import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#013a63" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/logo">
              Band Festival
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/bands">
                    Bands
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sponsor">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/partners">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="d-flex flex-fill mx-5">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Your Favorite Band"
                  aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* hero text */}
      <div
        className="text-center my-2 hero-text"
        style={{ backgroundColor: "#014f86" }}
      >
        <h1>
          Rock And Roll-<span>2021</span>
        </h1>
        <h3>
          We are going to host the world's one of the biggest concert at
          Randall's Island
        </h3>
        <h1>It's A 10 Million USD Budget For This Concert</h1>
      </div>
    </div>
  );
};

export default Header;
