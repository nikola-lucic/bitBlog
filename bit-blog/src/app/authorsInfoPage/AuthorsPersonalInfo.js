import React, { Component } from "react";

const AuthorsPersonalInfo = (props) => {
  return (
    <div className="row left-align valign-wrapper">
      <div className="col s12 m6 l6">
        <img alt="" />
      </div>
      <div className="col s12 m6 l6">
        <h2>{props.authorData.name}</h2>
        <p>user name:</p>
        <p>email:</p>
        <p>phone:</p>
      </div>
    </div>
  );
};

export default AuthorsPersonalInfo;
