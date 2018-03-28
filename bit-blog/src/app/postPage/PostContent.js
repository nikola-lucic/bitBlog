import React, { Component } from "react";
import { Link } from "react-router-dom";

const PostContent = props => {

  
  return (
    <div className="row">
      <div className="col s12 m12 l12 left-align">
        <Link to="/" className="waves-effect waves-light btn blue">Back</Link>
      </div>
      <div className="col s12 m12 l12 center-align">
        <h3>{props.post.title}</h3>
        <Link to="/">{props.authorData.name}</Link>
        <p>{props.post.text}</p>
      </div>
    </div>
  );
};

export default PostContent;
