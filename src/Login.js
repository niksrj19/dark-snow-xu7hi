import React, { Component } from "react";
import axios from "axios";
import DetailsPage from "./DetailsPage";

import localStorage from "local-storage";
require("../files/stylesheet.css");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      valid: ""
    };
  }

  onInputValueChanges = event => {
    if (event.target.name === "username") {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  renderRedirect = () => {
    if (this.state.valid) {
      this.setState({ valid: true });
      localStorage.set("vald", true);
      console.log("valid=", localStorage.get("vald"));

      this.props.history.push("/DetailsPage");
    } else {
      localStorage.set("vald", false);
    }
  };

  checkLoginDetals = () => {
    console.log(this.state.name + "   " + this.state.password);

    axios.get("https://swapi.co/api/people/").then(res => {
      let persons = res.data;
      //  let personsArr = [...persons];
      //personsArr =[...personsArr];
      console.log(res.data);
      console.log(
        "persons count=" +
          persons.count +
          "persons.next=" +
          persons.next +
          " results size=" +
          persons.results.length
      );
      var b = 87 / 10;
      b = Math.floor(b);
      console.log(b);

      for (var i = 1; i <= b + 1; i++) {
        axios.get(`https://swapi.co/api/people/?page=${i}`).then(res => {
          let persons = res.data;
          for (var j = 0; j < persons.results.length; j++) {
            if (
              persons.results[j].name === this.state.name &&
              persons.results[j].birth_year === this.state.password
            ) {
              console.log("successfull login");
              this.setState({ valid: true });
              console.log(this.state.valid);
              this.props.history.push("/search");
            }
          }
        });
      }
    });
  };

  render() {
    return (
      <div className="loginClass">
        <center class="loginHeadline">Star War Login</center>

        <input
          className="logininputClass"
          type="text"
          onChange={this.onInputValueChanges}
          placeholder="Enter the username"
          name="username"
          value={this.state.name}
        />
        <br />

        <input
          className="logininputClass"
          type="password"
          onChange={this.onInputValueChanges}
          placeholder="Enter the Password"
          name="password"
          value={this.state.password}
        />
        <span id="info" />
        <br />
        <button class="LoginButton" onClick={this.checkLoginDetals}>
          login
        </button>
      </div>
    );
  }
}

export default Login;
