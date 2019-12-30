import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
require("../files/stylesheet.css");
class SearchAllPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sword: "",
      smallerpopulation: 0,
      planets: [],
      filterPlanet: [],
      isLoded: false,
      shouldLoad: false,
      showGrid: false
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

      this.setState({ filterPlanet: planet, showGrid: false });
    } else {
      this.setState({ filterPlanet: [] });
    }
  };
  showHomePlanet = () => {
    this.setState({ showGrid: !this.state.showGrid });
  };

  render() {
    return (
      <div>
        {this.state.isLoded ? (
          <div className="SearchAllClass">
            <h1 className="loginHeadline"> Search All Planets</h1>
            <input
              className="logininputClass"
              placeholder="Enter Planet Name"
              value={this.state.sword}
              onChange={this.inputValue}
              onKeyUp={this.searchPlanet}
            />
            <button
              className="gridview-home-search"
              onClick={this.showHomePlanet}
            >
              Complete List
            </button>
            <br />

            {this.state.filterPlanet.length > 0
              ? this.state.filterPlanet.map((items, key) => (
                  <Display
                    name={items.name}
                    key={key}
                    population={items.population}
                    planet={items}
                  />
                ))
              : null}

            {this.state.showGrid ? (
              <div>
                <h4>Complete Planet List </h4>
                {this.state.planets.map((items, key) => (
                  <div key={key}>
                    <Display
                      name={items.name}
                      population={items.population}
                      planet={items}
                    />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
export default SearchAllPlanet;
