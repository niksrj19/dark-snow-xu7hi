import React, { Component } from "react";

class Display extends Component {
  render() {
       
   const mystyle = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",

      fontFamily: "Arial",
      fontSize :"20px",

      margin : "10px"
    }

   return (
      <div >
         <div style={mystyle}>
        <h3>Name : {this.props.name}</h3>
        <h4>population :{this.props.population}</h4>
        </div>
      </div>
    );
  }
}

export default Display;
