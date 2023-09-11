import { useState } from "react";
import "./Country.css"
function SingleCountry({country, handleAddToVisitList, handleVisitedFlag}) {
    const {name, flags} = country;
    
    const [visit, setVisit] =  useState(false)
    const visitHandler=()=>{
        setVisit(!visit)
    }
    return(
        <div className={`country ${visit? 'visited': 'country'}`}>
            <img className="image" src={flags.png} alt="" />
            <p className="name">name: {name?.common} </p>
            <button onClick={()=>{handleVisitedFlag(country.flags.png)}}>Add Flag</button>
            <button onClick={()=>{handleAddToVisitList(country)}}>Add To Visited List</button>
            <button onClick={visitHandler}>{visit?'Visited': 'visit'}</button>
            <p>{visit?'I,ve visited this country': ' I want to visit'}</p>
        </div>
    )
}
export default SingleCountry