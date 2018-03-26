import React, { Component } from "react";
import React, { Link } from "react";

const PostRelatedLinks = (props) => {
  return (
    <div className="row">
      <div className="col s12 m12 l12 left-align">
        <h1>Some heding about PostRelatedLinks</h1>
        <Link to="/"><li> Some link</li></Link>
        <Link to="/"><li> Some link</li></Link>
        <Link to="/"><li> Some link</li></Link>
      </div>
    </div>
  );
};

export default PostRelatedLinks;