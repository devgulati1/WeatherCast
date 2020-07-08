import React from "react"
let Card=({City,temp,feels_like,temp_max,temp_min,weather})=>{
    return(
        <div className="  flex justify-center tc shadow-4   br3 " >
        <div className="ma2 pa2">
        <h3>{"City"}</h3>
        <p>{City.name}</p>
        <h3>{"Temp"}</h3>
        <p>{temp }<span className="degree-symbol"></span>C</p>
        <h3>{"Feels Like"} </h3>
        <p>{feels_like }<span className="degree-symbol"></span>C</p>
        </div>

        <div className="ma2 pa2">
        <h3>TempMax</h3>
        <p>{temp_max}<span className="degree-symbol"></span>C</p>
        <h3>TempMin</h3>
        <p>{temp_min}<span className="degree-symbol"></span>C</p>
        <h3>Weather</h3>
        <p>{weather}</p>
        </div>
        </div>
    )
}
export default Card