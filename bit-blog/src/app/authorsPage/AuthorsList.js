import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorsItem from "./AuthorsItem";

const AuthorsLists = props => {
  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <ul className="collection with-header">
          {props.authors.map((data) => {
            return (
              <AuthorsItem key={data.id} name={data.name}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AuthorsLists;
