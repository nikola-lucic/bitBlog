import React, { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import Home from './home/Home';
import { Switch, Route } from "react-router-dom"

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Post' component={Post} />
      <Route path='/Authors' component={Authors} />
      <Route path='/AuthorsInfo' component={AuthorsInfo} />
      <Route path='/About' component={About} />
    </Switch>
  )
}

export default App;
