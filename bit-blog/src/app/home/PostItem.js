import React, { Component } from "react";
import { Link } from "react-router-dom";
const PostItem = props => {
  return (
    <li className="collection-item">
      <div>
        Alvin<Link to="/" className="secondary-content">
          <i className="material-icons">star</i>
        </Link>
      </div>
    </li>
  );
};

export default PostItem;
