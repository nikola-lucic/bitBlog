import React, { Component } from "react";

const AuthorsAddress = (props) => {
  return (
    <div className="row valign-wrapper">
      <div className="col s12 m6 l6 right-align">
        <h2>Address</h2>
        <p>street:</p>
        <p>city:</p>
        <p>zip code:</p>
      </div>
      <div className="col s12 m6 l6 right-align">
        <map></map>
      </div>
    </div>
  );
};

export default AuthorsAddress;
