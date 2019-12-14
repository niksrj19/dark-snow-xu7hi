import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sword: "",
      smallerpopulation: 0,
      planets: [],
      filterPlanet:[],
      isLoded:false
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      var planetdetails = res.data;
      var planetCount = planetdetails.count;
      var loopCount = Math.floor(planetCount / planetdetails.results.length);
      for (var i = 0; i <= loopCount + 1; i++) {
        axios.get(`https://swapi.co/api/planets/?page=${i}`).then(res => {
          let planet = res.data;
          var planetCopy = [...this.state.planets];
          planetCopy = planetCopy.concat(planet.results);
          this.setState({ planets: planetCopy,isLoded:true});

        });
      }
    });
  }
 
  inputValue = event => {
    this.setState({ sword: event.target.value });
  };
  searchPlanet = async event => {
    if(event.target.value.length>0){
    var planet = await this.state.planets.filter(items => {
      return new RegExp("^" + event.target.value.toUpperCase()).test(items.name.toUpperCase());
    });
    console.log(planet);
    this.setState({filterPlanet:planet});
   }else{
    this.setState({filterPlanet:[]});
   }
    
    /* var x=[];
    for (var i = 0; i < planet.length; i++) {
      var regex = new RegExp("^" + event.target.value);

      if (regex.test(planet[i].name)) {
        console.log("succesful");
        console.log(planet[i]);
         x.push(planet[i]);
      }
    }*/
    // console.log(planet[i]);
  };

  render() {
   
    return (
      <React.Fragment>
        {this.state.isLoded ?  
        <React.Fragment>
         
        <h1>Welcome to the Search Page</h1>
        <input
          placeholder="Enter Planet Name"
          value={this.state.sword}
          onChange={this.inputValue}
          onKeyUp={this.searchPlanet}
        />
        
        
        { this.state.filterPlanet.length >0?
          this.state.filterPlanet.map((items, key) => (
        <Display name={items.name}
         key={key}
          population={items.population} />
        ))
      :null
           }
        
      </React.Fragment>
       : null}
      </React.Fragment> 
     
    );
  }
}
export default DetailsPage;
