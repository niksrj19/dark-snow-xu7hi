import React, { Component } from "react";
require("../files/stylesheet.css");

class Display extends Component {
  getFont(population) {
    let fontClass = "";
    fontClass =
      population < 5000
        ? "font10"
        : population < 50000 && population >= 5000
        ? "font12"
        : population < 2000000 && population >= 50000
        ? "font14"
        : population >= 2000000 && population < 20000000
        ? "font16"
        : population === "unknown"
        ? "font6"
        : "font18";

    return fontClass;
  }

  render() {
    return (
      <>
        <div className="content">
          <p className={this.getFont(this.props.planet.population)}>
            Name : {this.props.planet.name}
          </p>
          <p className={this.getFont(this.props.planet.population)}>
            population :{this.props.planet.population}
          </p>
          <p className={this.getFont(this.props.population)}>
            diameter:{this.props.planet.diameter}
          </p>
        </div>
      </>
    );
  }
}

export default Display;
