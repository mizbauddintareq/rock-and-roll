import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Band = (props) => {
  const musicIcon = <FontAwesomeIcon icon={faHeadphones} />;

  const { thumb, name, genres, labels, origin, fees } = props.band;
  return (
    <div>
      <div className="col">
        <div className="card h-100 shadow p-3 mb-4 bg-body rounded">
          <img
            src={thumb}
            className="card-img-top"
            alt="..."
            style={{ height: "220px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6>Genres: {genres}</h6>
            <p>
              <span className="fw-bold">Labels:</span> {labels}
            </p>
            <p>
              <span className="fw-bold">Origin:</span> {origin}
            </p>
            <h6>
              <span className="fw-bold">Fees:</span> ${fees}
            </h6>
            <button
              onClick={() => props.handleBtn(props.band)}
              type="button"
              className="btn text-white"
              style={{ backgroundColor: "#013a63" }}
            >
              {musicIcon} Add To fav list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
