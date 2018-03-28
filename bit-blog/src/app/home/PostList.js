import React, { Component } from "react";
import PostItem from "./PostItem";

const PostList = props => {
  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <ul className="collection with-header">
          {props.posts.map((post) => {
            return (
              <PostItem key={post.id} title={post.title} text={post.text} postId={post.id} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
