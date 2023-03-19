import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ScrollToTop from "react-scroll-to-top";
import urid from "urid";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  const api_key = process.env.REACT_APP_THECAT_API_KEY;
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(url, {
      headers: {
        "x-api-key": api_key,
      },
    })
      .then((res) => res.json())
      .then((data) => setApiData(data.filter((img) => img.image?.url != null)));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Cat API React App
          <br />
          <code>Cat Breeds</code>
        </p>
      </header>

      <Table
        className="text-center align-middle md-no-table"
        bordered
        striped
        hover
        variant="dark"
        size="sm"
      >
        <thead className="align-middle" key={urid()}>
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
        <tbody key={urid()}>
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
      <ScrollToTop smooth color="#61dafb" />
    </div>
  );
}

export default App;
