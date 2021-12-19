import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [up, setUp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUp(data);
      });
  }, [id]);
  const { name, description, img } = up;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(up),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("your data updated");
          setUp({});
        }
        console.log(data);
      });
  };
  const handleNameChange = (e) => {
    const updateName = e.target.value;
    const update = { name: updateName, description: description, img };
    setUp(update);
  };
  const handleDescriptionChange = (e) => {
    const updateDescription = e.target.value;
    const leatestDescription = { ...up };
    leatestDescription.description = updateDescription;
    setUp(leatestDescription);
  };
  return (
    <div className="App container mt-4">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={up.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{up.name}</h5>
              <p class="card-text">{up.description}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-2">Update title and description</h2>
                <input
                  placeholder="Update Name"
                  type="text"
                  className="  form-control"
                  value={name || ""}
                  onChange={handleNameChange}
                />{" "}
                <br />{" "}
                <textarea
                  rows="7"
                  placeholder="Update Description"
                  className=" form-control"
                  type="text"
                  value={description || ""}
                  onChange={handleDescriptionChange}
                />
                <br />
                <input
                  className="form-control text-white bg-success"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
