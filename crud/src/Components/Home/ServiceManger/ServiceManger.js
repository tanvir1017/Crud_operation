import React, { useEffect, useState } from "react";
import Manage from "./Manage";

const ServiceManger = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleDelete = (id) => {
    const process = window.confirm("Are sure to delete");
    if (process) {
      fetch(`http://localhost:5000/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
          }
        });
      const reamining = data.filter((dt) => dt._id !== id);
      setData(reamining);
    }
  };
  return (
    <div className="container App">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((dt) => (
          <Manage key={dt._id} dt={dt} handleDelete={handleDelete}></Manage>
        ))}
      </div>
    </div>
  );
};

export default ServiceManger;
