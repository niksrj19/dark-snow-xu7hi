import React, { Component } from "react";

import SearchAllPlanet from "./SearchAllPlanet";
import SearchHomePlanet from "./SearchHomePlanet";

require("../files/stylesheet.css");
class SearchPage extends Component {
  render() {
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
