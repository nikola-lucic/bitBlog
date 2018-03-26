import React, { Component } from "react";
import PostContent from "./PostContent";
import PostRelatedLinks from "./PostRelatedLinks";

export default Post;

class Post extends React {
  render() {
    return (
      <main className="container">
        <PostContent />
        <PostRelatedLinks />
      </main>
    );
  }
}
