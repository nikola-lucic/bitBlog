import React from "react";
import PostList from "./PostList";

class Home extends React.Component {
  render() {
    return (
      <main className="container">
      <h1 className="center-align">Post List</h1>
        <PostList />
      </main>
    );
  }
}

export default Home;
