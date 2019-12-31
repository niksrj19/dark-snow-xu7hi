import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SearchAllPlanet from "./SearchAllPlanet";
import SearchHomePlanet from "./SearchHomePlanet";

require("../files/stylesheet.css");
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    if (localStorage.getItem("Token")) {
      this.state.isLoggedIn = true;
    }
  }
  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <SearchAllPlanet />
        <SearchHomePlanet person={this.props.location.state.detail} />
        <button
          className="logoutButton"
          onClick={props => {
            this.props.history.push("/logout");
          }}
        >
          LOGOUT
        </button>
      </div>
    );
  }
}
export default SearchPage;
