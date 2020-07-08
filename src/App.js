import React, { Component } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar"
import {City} from "./City"
import Card from "./Components/Card/Card"
import "./App.css"

class App extends Component{
  constructor(){
    super()
    this.state={
      searchfield:"",
      City:[],
      temp:"",
      feels_like:"",
      temp_max:"",
      temp_min:"",
      weather:"",
    }
  }

  onSubmit=(event)=>{
    this.setState({searchfield:event.target.value})
  }
  onBtn=(event)=>{
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchfield}&appid=5d8142a7ce8ccb3bc6c598b67a2835f3`).then(response=>response.json())
    .then((user)=>{
this.setState({City:user,
  temp:Math.round(user.main.temp-273.15),

  feels_like:Math.round(user.main.feels_like- 273.15),
   temp_max:Math.round(user.main.temp_max- 273.15),
    temp_min:Math.round(user.main.temp_min- 273.15),
     weather:user.weather[0].description})

console.log(this.state.City)
    }).catch((error)=>{
      console.log("error has occured",error)
    })

    
    
  }
  
  render(){
  return(
    <div className="tc ma3">
    <h1>{"WeatherCast"}</h1>
    <SearchBar onBtn={this.onBtn} onSubmit={this.onSubmit}/>
    <Card City={this.state.City} temp={this.state.temp} feels_like={this.state.feels_like} temp_max={this.state.temp_max} temp_min={this.state.temp_min} weather={this.state.weather}  />
  <footer>Made With  😍 By Dev</footer>
    </div>
  )
  }
}
export default App;
