import React, { Component } from "react";
import { Link } from "react-router-dom";

const AuthorsItem = (props) => {
  return (
    <Link to={`/AuthorsInfo/${props.authorsId}`}><li className="collection-item" key={props.id}>
      <div>
      <span className="secondary-content">
          <i className="material-icons">star</i></span>
      </div>
      <p>{props.name}</p>
    </li>
    </Link>
  );
  
};

export default AuthorsItem;