import React from "react"

let SearchBar=({onSubmit,onBtn})=>{
    return(
        <div className="ma3 tc">
        <input className="ma1 pa2" type="text" placeholder="search city here" onChange={onSubmit}/>
        <button className="f6 link dim br3 ba ph3 pv2 mb2 dib black" onClick={onBtn} >Go</button>
        </div>
    )
}
export default SearchBar