import React, { useState, useEffect, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "lightbox2/dist/js/lightbox-plus-jquery";
import "lightbox2/dist/css/lightbox.css";
import { fetchCatBreeds } from "../services/catApiService";

const BreedsComponent = memo(() => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchCatBreeds(setApiData).catch((error) =>
      console.error("Error fetching breeds:", error.message)
    );
  }, []);

  return (
    <div className="breeds">
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
          {apiData.map((item) => (
            <tr key={item.id}>
              <td data-title="Name">
                <a href={item.wikipedia_url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </td>
              <td data-title="Temperament">{item.temperament}</td>
              <td data-title="Description">{item.description}</td>
              <td data-title="Life Span">{item.life_span}</td>
              <td data-title="Child Friendly">{item.child_friendly}</td>
              <td data-title="Dog Friendly">{item.dog_friendly}</td>
              <td data-title="Stranger Friendly">{item.stranger_friendly}</td>
              <td data-title="Energy Level">{item.energy_level}</td>
              <td data-title="Grooming">{item.grooming}</td>
              <td data-title="Origin">{item.origin}</td>
              <td data-title="Image">
                <a
                  href={item.image.url}
                  data-lightbox="Cat Breeds"
                  data-title={item.name}
                >
                  <img
                    src={item.image.url}
                    alt={item.name}
                    title={item.name}
                    className="image_cats_collection"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
});

export default BreedsComponent;
