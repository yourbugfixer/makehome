import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="main-header">
      <div className="col-sm-12">
        <p>Contact US on 7556778645</p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div className="logo-box">
            <NavLink to="/">
              <img src={Logo} alt="company logo" />
            </NavLink>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-md-auto mb-2 mb-lg-0 navigation">
              <li class="nav-item">
                <NavLink to="/" activeClassName="linkActive" exact>
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/about" activeClassName="linkActive">
                  About
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      to="/services/interior-design"
                      activeClassName="linkActive"
                    >
                      Interior Desiging
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/plumbing"
                      activeClassName="linkActive"
                    >
                      Sanitary
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink to="/gallery" activeClassName="linkActive">
                  Gallery
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/property" activeClassName="linkActive">
                  Property
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contact" activeClassName="linkActive">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
