import React, { Component } from "react";
import { postData } from "./../services/PostData";
import PostList from "./PostList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPostData() {
    postData.fetchPostData()
    .then(postData => {
      this.setState({
        posts: postData
      });
    });
  }
  componentDidMount() {
    this.loadPostData()
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <h1 className="center-align">Post List</h1>
          </div>
        </div>
        <PostList posts={this.state.posts}/>
      </main>
    );
  }
}

export default Home;
