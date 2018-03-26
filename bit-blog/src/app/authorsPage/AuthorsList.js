import React, { Component } from "react";
import { Link } from "react-router-dom";

const AuthorsLists = (props) => {
  return (
    <div className="row">
      <ul className="collection">
      <Link to="/"><li className="collection-item">Alvin</li></Link>
      </ul>
    </div>
  );
};

export default AuthorsLists;
