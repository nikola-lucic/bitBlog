import React, { Component } from "react";
import { Links } from "react-router-dom";
import Link from "react-router-dom/Link";
import AuthorsPersonalInfo from "./AuthorsPersonalInfo";
import AuthorsAddress from "./AuthorsAddress";
import AuthorsCompany from "./AuthorsCompany";

class AuthorsInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <Link class="waves-effect waves-light btn">back</Link>
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
