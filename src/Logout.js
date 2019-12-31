import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("Token");
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
      <button
        className="gridview-home-search"
        onClick={props => {
          this.props.history.push("/");
        }}
      >
        Login Again
      </button>
    );
  }
}
export default Logout;
