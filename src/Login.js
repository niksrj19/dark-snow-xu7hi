import React, { Component } from "react";
import axios from "axios";
require("../files/stylesheet.css");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      valid: true
    };
  }

  onInputValueChanges = event => {
    this.setState({ [event.target.name]: event.target.value, valid: true });
  };

  renderRedirect = () => {
    if (this.state.valid) {
      this.setState({ valid: true });
      localStorage.setItem("Token", "asddsfsd");

      this.props.history.push("/DetailsPage");
    } else {
      localStorage.set("vald", false);
    }
  };

  checkLoginDetals = () => {
    axios.get("https://swapi.co/api/people/").then(res => {
      let persons = res.data;
      //  let personsArr = [...persons];
      //personsArr =[...personsArr];

      var b = persons.count / 10;
      b = Math.floor(b);
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
              // return <Redirect to="/search" />;
              this.props.history.push("/search");
            } else {
              this.setState({ valid: false });
            }
          }
        });
      }
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state);
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="loginClass">
        <center className="loginHeadline">Star War Login</center>
        <input
          className="logininputClass"
          type="text"
          onChange={this.onInputValueChanges}
          placeholder="Enter the username"
          name="name"
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
        <br />
        <span id="info">
          {this.state.valid ? "" : "wrong username or password"}
        </span>
        <br />
        {console.log("valid=", this.state.valid)}
        <button className="LoginButton" onClick={this.checkLoginDetals}>
          login
        </button>
      </div>
    );
  }
}

export default Login;
