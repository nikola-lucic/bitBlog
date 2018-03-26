import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorsLists from "./AuthorsList";

class Authors extends React {
  render() {
    return (
      <main className="container">
      <h1 className="align-center">Authors</h1>
      <AuthorsLists />
    </main>
    )
  }
}
export default Authors;
