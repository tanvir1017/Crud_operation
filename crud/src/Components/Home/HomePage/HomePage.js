import React, { useEffect, useState } from "react";
import Services from "./Services";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
