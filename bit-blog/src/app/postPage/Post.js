import React, { Component } from "react";
import { postData } from "./../services/PostData";
import { authorsData } from "./../services/AuthorsData";
import PostContent from "./PostContent";
import PostRelatedLinks from "./PostRelatedLinks";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {},
      authorData: {}
    };
  }
  loadPostData(postId) {
    postData.fetchPostDetails(postId).then(postData => {
      this.setState({
        postData: postData,
      });

      this.loadAuthorsData(postData.userId);
    });
  }
  loadAuthorsData(userId) {
    authorsData.fetchAuthorsDetails(userId).then(data => {
      this.setState({
        authorData: data
      });
    });
  }
  componentDidMount() {
    this.loadPostData(this.props.match.params.postId);
  }
  componentWillReceiveProps(nextProps) {
    this.loadPostData(nextProps.match.params.postId);

  }

  render() {
    return (
      <main className="container">
        <PostContent post={this.state.postData} authorData={this.state.authorData} />
        <PostRelatedLinks />
      </main>
    );
  }
}

export default Post;
