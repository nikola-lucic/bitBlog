import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authorsData } from "./../services/AuthorsData";
import AuthorsLists from "./AuthorsList";

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      authors:[]
    }
  }
  loadAuthorsData() {
    authorsData.fetchAuthorsData()
    .then(authorsData => {
      this.setState({
        authors: authorsData,
      });
    });
  }
  componentDidMount() {
    this.loadAuthorsData()
  }
  render() {
    return (
      <main className="container">
        <h1 className="align-center">Authors({this.state.authors.length})</h1>
        <AuthorsLists authors={this.state.authors}/>
      </main>
    );
  }
}
export default Authors;
