import React from "react";
import urid from "urid";

const STATUS_FETCHING = "fetching";
const STATUS_FETCHED = "fetched";
const STATUS_LOADED = "loaded";
const api_key = process.env.REACT_APP_THECAT_API_KEY;

export default class RandomCat extends React.Component {
  state = {
    image: null,
    loadingState: STATUS_FETCHING,
  };

  componentDidMount() {
    this.fetchRandomCat();
  }

  fetchRandomCat = () => {
    this.setState({
      loadingState: STATUS_FETCHING,
    });
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": api_key,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const { url } = data[0];
        this.setState({ image: url, loadingState: STATUS_FETCHED });
      });
  };

  render() {
    return (
      <div className="random">
        <div>
          <button className="btn btn-info" onClick={this.fetchRandomCat}>
            Get Random Cat!
          </button>
        </div>
        <div>
          {this.state.loadingState !== STATUS_LOADED && (
            <div
              className="spinner-border text-warning"
              style={{ width: "5rem", height: "5rem", margin: "60px auto" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {this.state.loadingState !== STATUS_FETCHING && this.state.image ? (
            <img
              onLoad={() => {
                this.setState({
                  loadingState: STATUS_LOADED,
                });
              }}
              style={{
                display:
                  this.state.loadingState === STATUS_LOADED ? "inline" : "none",
              }}
              key={urid()}
              src={this.state.image}
              alt="Random Cat"
            />
          ) : null}
        </div>
      </div>
    );
  }
}
