import React, { Component } from "react";
import axios from "axios";

require("../files/stylesheet.css");

class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      valid: true,
      persons: [],
      isLoaded: false,
      isLoggedIn: false
    };
    localStorage.removeItem("Token");
  }

  onInputValueChanges = event => {
    this.setState({ [event.target.name]: event.target.value, valid: true });
  };

  checkLoginDetals = () => {
    let personsData = [...this.state.persons];
    for (var j = 0; j < personsData.length; j++) {
      if (
        personsData[j].name === this.state.name &&
        personsData[j].birth_year === this.state.password
      ) {
        console.log("successfull login");
        localStorage.setItem("Token", "true");
        this.setState({ valid: true });
        // return <Redirect to="/search" />;
        //this.props.history.push("/search");

        this.props.history.push({
          pathname: "/search",
          state: { detail: personsData[j] }
        });
      } else {
        this.setState({ valid: false });
      }
    }
  };

  componentDidMount() {
    axios.get("https://swapi.co/api/people/").then(res => {
      var personsdetails = res.data;
      var personsCount = personsdetails.count;
      var loopCount = Math.floor(personsCount / personsdetails.results.length);
      for (var i = 1; i <= loopCount + 1; i++) {
        axios.get(`https://swapi.co/api/people/?page=${i}`).then(res => {
          let person = res.data;
          var personCopy = [...this.state.persons];
          personCopy = personCopy.concat(person.results);
          this.setState({ persons: personCopy, isLoaded: true });
        });
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <h1>Loading.....</h1>;
    }
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

        <button className="LoginButton" onClick={this.checkLoginDetals}>
          login
        </button>
      </div>
    );
  }
}

export default Login2;
