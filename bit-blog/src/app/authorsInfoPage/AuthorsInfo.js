import React, { Component } from "react";
import { Links } from "react-router-dom";
import Link from "react-router-dom/Link";
import { authorsData } from "./../services/AuthorsData";
import AuthorsPersonalInfo from "./AuthorsPersonalInfo";
import AuthorsAddress from "./AuthorsAddress";
import AuthorsCompany from "./AuthorsCompany";

class AuthorsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorData: {},
      authorId:{}
    };
  }
  loadAuthorsData(userId) {
    authorsData.fetchAuthorsData(authorsData).then(data => {
      this.setState({
        authorId: authorsData
      });
      this.loadAuthorsId(authorsData.userId);
    });
  }
  loadAuthorsId(userId) {
    authorsData.fetchAuthorsDetails(userId).then(data => {
      this.setState({
        authorId: data
      });
    });
  }
  componentDidMount(userId) {
    this.loadAuthorsData(this.props.match.params.authorId);
  }
  componentWillReceiveProps(nextProps) {
    this.loadAuthorsData(nextProps.match.params.authorId);
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <Link class="waves-effect waves-light btn">back</Link>
          </div>
          <AuthorsPersonalInfo authorData={this.state.authorData} />
          <AuthorsAddress authorData={this.state.authorData} />
          <AuthorsCompany authorData={this.state.authorData} />
        </div>
      </main>
    );
  }
}
export default AuthorsInfo;
