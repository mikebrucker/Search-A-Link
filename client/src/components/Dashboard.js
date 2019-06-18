import React, { Component } from "react";
import ExternalLinks from "./ExternalLinks";
import Searchbar from "./Searchbar";
import InternalLinks from "./InternalLinks";
import axios from "axios";

class Dashboard extends Component {
  state = {
    link: "",
    searchLink: "",
    validLink: null,
    externalLinks: [],
    internalLinks: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchURL(this.state.link);
  };

  searchURL = linkToSearch => {
    axios.post("/api/search", { searchLink: linkToSearch }).then(res => {
      this.setState({
        searchLink: res.data.searchLink,
        validLink: res.data.validLink,
        internalLinks: res.data.internalLinks,
        externalLinks: res.data.externalLinks
      });
    });
  };

  render() {
    return (
      <div>
        <Searchbar
          link={this.state.link}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div>
          {this.state.validLink === false
            ? "Please enter a valid link starting with https:// or http://"
            : ""}
        </div>
        <h1>{this.state.searchLink}</h1>
        <ExternalLinks
          searchURL={this.searchURL}
          externalLinks={this.state.externalLinks}
        />
        <InternalLinks
          searchURL={this.searchURL}
          internalLinks={this.state.internalLinks}
        />
      </div>
    );
  }
}

export default Dashboard;
