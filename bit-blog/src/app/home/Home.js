import React, { Component } from "react";
import PostList from "./PostList";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <h1 className="center-align">Post List</h1>
          </div>
        </div>
        <PostList />
      </main>
    );
  }
}

export default Home;
