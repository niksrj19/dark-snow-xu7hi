import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("Token");
  }
  render() {
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
