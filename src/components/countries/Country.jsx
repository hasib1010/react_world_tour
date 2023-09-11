import { useEffect, useState } from "react";
import SingleCountry from "../CountrySingle";
 import "./Grid.css"
const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags]= useState([]);
    const handleAddToVisitList = (country)=>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag = (flags)=>{
       const newFlags=[...visitedFlags,flags];
       setVisitedFlags(newFlags)
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <p><small>visited Country : {visitedCountries.length}</small></p>
            <ol>
                {
                    visitedCountries.map(visitedCountry=> <li>{visitedCountry.name.common}</li>)
                }
            </ol>
            <p>visited flags</p>
            <div className="flags-container">
            {
                visitedFlags.map(flag=><img src={flag}></img>)
            }
            </div>
            <div className="grid">
                {
                    countries.map(country => <SingleCountry
                         key={country.name?.common} 
                         country={country}
                         handleVisitedFlag={handleVisitedFlag}
                         handleAddToVisitList={handleAddToVisitList}
                         ></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Country;