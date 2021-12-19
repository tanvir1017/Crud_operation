import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-white bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Crud Operation
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/addService">
                Add Service
              </Link>
              <Link class="nav-link" to="/serviceManager">
                ServiceManager
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
