import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <h3>Name : {this.props.name}</h3>
        <h4>population :{this.props.population}</h4>
      </div>
    );
  }
}

export default Display;
