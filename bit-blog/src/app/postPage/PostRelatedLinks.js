import React, { Component } from "react";
import { Link } from "react-router-dom";

const PostRelatedLinks = (props) => {
  return (
    <div className="row">
      <div className="col s12 m12 l12 left-align">
        <h3>Some heding about PostRelatedLinks</h3>
        <Link to="/"><li> Some link</li></Link>
        <Link to="/"><li> Some link</li></Link>
        <Link to="/"><li> Some link</li></Link>
      </div>
    </div>
  );
};

export default PostRelatedLinks;