import React, { Component } from "react";
import PostList from "../entities/Posts";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <Link to={`/Post/${props.postId}`}><li className="collection-item" key={props.id}>
      <div>
        {props.title}
      <span className="secondary-content">
          <i className="material-icons">star</i></span>
      </div>
      <p>{props.text}</p>
    </li>
    </Link>
  );
};

export default PostItem;
