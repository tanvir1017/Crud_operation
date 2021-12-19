import React from "react";
import { Link } from "react-router-dom";

const services = ({ service }) => {
  const { name, price, description, _id, img } = service;
  return (
    <div class="col">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div className="card-footer App">
          <button className="btn btn-success me-2">Pay:{price}</button>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-danger me-2">Book Service</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-dark ">Update </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default services;
