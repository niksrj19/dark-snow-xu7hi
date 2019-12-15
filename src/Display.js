import React, { Component } from "react";

class Display extends Component {
  render() {
    const mystyle = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",

      fontFamily: "Arial",
      fontSize: "20px",

      margin: "10px"
    };
    const mystyle1 = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",

      fontFamily: "Arial",
      fontSize: "16px",

      margin: "10px"
    };
    const mystyle2 = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",

      fontFamily: "Arial",
      fontSize: "12px",

      margin: "10px"
    };
    const mystyle3 = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",

      fontFamily: "Arial",
      fontSize: "10px",

      margin: "10px"
    };
    const mystyle4 = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "8px",

      fontFamily: "Arial",
      fontSize: "10px",

      margin: "10px"
    };
    let m = "";

    return (
      <div>
        {
          (m =
            this.props.population < 5000
              ? mystyle4
              : this.props.population < 50000 && this.props.population >= 5000
              ? mystyle3
              : this.props.population < 2000000 &&
                this.props.population >= 50000
              ? mystyle2
              : this.props.population >= 2000000 &&
                this.props.population < 20000000
              ? mystyle1
              : mystyle)
        }

        <div style={m}>
          <h3>Name : {this.props.name}</h3>
          <h4>population :{this.props.population}</h4>
        </div>
      </div>
    );
  }
}

export default Display;
