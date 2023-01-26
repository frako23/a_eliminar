import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/">
          <img src={logo} className="rounded-3 imagen me-3" />
          <span className="navbar-brand mb-0 h1 link">Producciones ACME</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Salir</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
