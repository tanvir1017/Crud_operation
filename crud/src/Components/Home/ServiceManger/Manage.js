import React from "react";

const Manage = ({ dt, handleDelete }) => {
  const { name, description, _id, img } = dt;

  return (
    <div class="col">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div className="card-footer App">
          <button className="btn btn-success me-2">Update</button>
          <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
            Delete {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manage;
