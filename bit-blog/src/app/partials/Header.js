import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <nav className="row blue">
          <div className="col s12 m12 l12">
            <div className="nav-wrapper container">
              <a className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Authors">Authors</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
