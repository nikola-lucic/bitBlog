import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorsLists from "./AuthorsList";

const Authors = props => {
  return (
    <main className="conatiner">
      <h1 className="align-center">Authors</h1>
      <AuthorsLists />
    </main>
  );
};

export default Authors;
