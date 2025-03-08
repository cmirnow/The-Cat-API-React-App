import React, { useState, useEffect, memo } from "react";
import { debounce } from "lodash";
import { fetchRandomCatImage } from "../services/catApiService";

const STATUS_FETCHING = "fetching";
const STATUS_FETCHED = "fetched";
const STATUS_LOADED = "loaded";
const STATUS_ERROR = "error";

const debouncedFetchRandomCat = debounce((setLoadingState, setImage) => {
  setLoadingState(STATUS_FETCHING);
  fetchRandomCatImage(setImage)
    .then(() => setLoadingState(STATUS_FETCHED))
    .catch(() => setLoadingState(STATUS_ERROR));
}, 500);

const RandomComponent = memo(() => {
  const [image, setImage] = useState(null);
  const [loadingState, setLoadingState] = useState(STATUS_FETCHING);

  useEffect(() => {
    debouncedFetchRandomCat(setLoadingState, setImage);
  }, []);

  return (
    <div className="random">
      <div>
        <button
          className="btn btn-info"
          onClick={() => debouncedFetchRandomCat(setLoadingState, setImage)}
          style={{ marginTop: "1rem" }}
        >
          Get Random Cat!
        </button>
      </div>
      <div>
        {loadingState === STATUS_FETCHING && (
          <div
            className="spinner-border text-warning"
            style={{ width: "5rem", height: "5rem", margin: "60px auto" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {loadingState === STATUS_ERROR && (
          <p style={{ color: "red", margin: "60px auto" }}>
            Failed to load cat image. Try again!
          </p>
        )}
        {loadingState !== STATUS_FETCHING && loadingState !== STATUS_ERROR && image && (
          <img
            onLoad={() => setLoadingState(STATUS_LOADED)}
            onError={() => setLoadingState(STATUS_ERROR)}
            style={{
              display: loadingState === STATUS_LOADED ? "inline" : "none",
            }}
            src={image}
            alt="Random Cat"
          />
        )}
      </div>
    </div>
  );
});

export default RandomComponent;
