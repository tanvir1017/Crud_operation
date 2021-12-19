import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div class="row row-cols-1 row-cols-md-2 container mx-auto">
      <div class="col">
        <div class="card">
          <img src={data.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{data.name}</h5>
            <p class="card-text">{data.description}</p>
          </div>
          <div className="card-footer App text-white bg-danger">
            Pay:{data.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
