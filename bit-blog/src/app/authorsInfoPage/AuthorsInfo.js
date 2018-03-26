import React, { Component } from "react";
import Home from "./home/Home";
import { Links } from "react-router-dom";
import Link from "react-router-dom/Link";
import AuthorsPersonalInfo from "./AuthorsPersonalInfo";
import AuthorsAddress from "./AuthorsAddress";
import AuthorsCompany from "./AuthorsCompany";

class AuthorsInfo extends React {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <Link>
              <a class="waves-effect waves-light btn">back</a>
            </Link>
          </div>
          <AuthorsPersonalInfo />
          <AuthorsAddress />
          <AuthorsCompany />
        </div>
      </main>
    );
  }
}
export default AuthorsInfo;
