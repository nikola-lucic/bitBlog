import React, { Component } from "react";
import "./App.css";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./home/Home";
import Authors from "./authorsPage/Authors";
import Post from "./postPage/Post";
import AuthorsInfo from "./authorsInfoPage/AuthorsInfo";
import About from "./aboutPage/About";
import { Switch, Route } from "react-router-dom";

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Post" component={Post} />
        <Route path="/Authors" component={Authors} />
        <Route path="/AuthorsInfo" component={AuthorsInfo} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
