import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">CRUD</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Agregar Empledo</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">Lista de empleados</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
