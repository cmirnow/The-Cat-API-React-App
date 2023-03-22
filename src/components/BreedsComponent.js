import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import urid from "urid";

function Breeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  const api_key = process.env.REACT_APP_THECAT_API_KEY;
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": api_key,
      },
    })
      .then((res) => res.json())
      .then((data) => setApiData(data.filter((img) => img.image?.url != null)));
  });

  return (
    <div className="App">
      <Table
        className="text-center align-middle md-no-table caption-top"
        bordered
        striped
        hover
        variant="dark"
        size="sm"
      >
        <caption>
          <button type="button" className="btn btn-info position-relative">
            Cat Breeds
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {apiData.length}
            </span>
          </button>
        </caption>
        <thead className="align-middle">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Temperament</th>
            <th scope="col">Description</th>
            <th scope="col">Life Span</th>
            <th scope="col">Child Friendly</th>
            <th scope="col">Dog Friendly</th>
            <th scope="col">Stranger Friendly</th>
            <th scope="col">Energy Level</th>
            <th scope="col">Grooming</th>
            <th scope="col">Origin</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(apiData).map((item) => (
            <tr key={urid()}>
              <td data-title="Name" key={urid()}>
                <a href={item.wikipedia_url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </td>
              <td data-title="Temperament" key={urid()}>
                {item.temperament}
              </td>
              <td data-title="Description" key={urid()}>
                {item.description}
              </td>
              <td data-title="Life Span" key={urid()}>
                {item.life_span}
              </td>
              <td data-title="Child Friendly" key={urid()}>
                {item.child_friendly}
              </td>
              <td data-title="Dog Friendly" key={urid()}>
                {item.dog_friendly}
              </td>
              <td data-title="Stranger Friendly" key={urid()}>
                {item.stranger_friendly}
              </td>
              <td data-title="Energy Level" key={urid()}>
                {item.energy_level}
              </td>
              <td data-title="Grooming" key={urid()}>
                {item.grooming}
              </td>
              <td data-title="Origin" key={urid()}>
                {item.origin}
              </td>
              <td data-title="Image" key={urid()}>
                <img
                  src={item.image.url}
                  alt={item.name}
                  title={item.name}
                  className="image_cats_collection"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Breeds;
