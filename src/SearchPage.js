import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
import SearchAllPlanet from "./SearchAllPlanet";
import SearchHomePlanet from "./SearchHomePlanet";
import Logout from "./Logout";
require("../files/stylesheet.css");
class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchAllPlanet />
        <SearchHomePlanet />
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
