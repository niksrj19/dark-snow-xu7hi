import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
import Logout from "./Logout";
require("../files/stylesheet.css");
class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sword: "",
      smallerpopulation: 0,
      planets: [],
      filterPlanet: [],
      isLoded: false,
      shouldLoad: false
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      var planetdetails = res.data;
      var planetCount = planetdetails.count;
      var loopCount = Math.floor(planetCount / planetdetails.results.length);
      for (var i = 1; i <= loopCount + 1; i++) {
        axios.get(`https://swapi.co/api/planets/?page=${i}`).then(res => {
          let planet = res.data;
          var planetCopy = [...this.state.planets];
          planetCopy = planetCopy.concat(planet.results);
          this.setState({ planets: planetCopy, isLoded: true });
        });
      }
    });
  }

  inputValue = event => {
    this.setState({ sword: event.target.value });
  };
  searchPlanet = async event => {
    if (event.target.value.length > 0) {
      var planet = await this.state.planets.filter(items => {
        return new RegExp("^" + event.target.value.toUpperCase()).test(
          items.name.toUpperCase()
        );
      });

      this.setState({ filterPlanet: planet });
    } else {
      this.setState({ filterPlanet: [] });
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoded ? (
          <React.Fragment>
            <h1 className="loginHeadline"> Search Planet</h1>
            <input
              className="logininputClass"
              placeholder="Enter Planet Name"
              value={this.state.sword}
              onChange={this.inputValue}
              onKeyUp={this.searchPlanet}
            />
            <button
              onClick={props => {
                this.props.history.push("/logout");
              }}
            >
              LOGOUT
            </button>

            {this.state.filterPlanet.length > 0
              ? this.state.filterPlanet.map((items, key) => (
                  <Display
                    name={items.name}
                    key={key}
                    population={items.population}
                  />
                ))
              : null}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
export default DetailsPage;
