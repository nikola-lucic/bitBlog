import React, { Component } from "react";
import PostContent from "./PostContent";
import PostRelatedLinks from "./PostRelatedLinks";

class Post extends React.Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <main className="container">
        <PostContent />
        <PostRelatedLinks />
      </main>
    );
  }
}

export default Post;
