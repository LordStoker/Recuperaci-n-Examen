
import {useState} from "react";


export default function Filter(props) {

    const[minRating, setMinRating] = useState("");
    const[maxRating, setMaxRating] = useState("");

    function handleFilter(){
        const min = parseFloat(minRating);
        const max = parseFloat(maxRating);
        props.onFilter(min,max);
    }
    return (
        <div className="filter dark">
               <div className="filter-controls dark">
                    <input onChange={(e) => setMinRating(e.target.value)} type="number" placeholder="Minimum Rating" className="dark filter-input" value={minRating}/>
                    <input onChange={(e) => setMaxRating(e.target.value)} type="number" placeholder="Maximum Rating" className="dark filter-input" value={maxRating}/>
                <button onClick= {handleFilter} className="dark filter-button">Filter</button>
               </div>
               <div className="options dark">
                  <svg className="icon-filter" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"></path>
                  </svg>
                  <select name="planet" className="dark">
                     <option value="All">All Planets</option>
                     <option value="Planet Vegeta">Planet Vegeta</option>
                     <option value="Casa de Mr. Satan">Casa de Mr. Satan</option>
                     <option value="Universe 7">Universe 7</option>
                     <option value="Planet Earth">Planet Earth</option>
                     <option value="Paoz Mountain">Paoz Mountain</option>
                     <option value="Earth">Earth</option>
                     <option value="Dr. Gero\'s Laboratory">Dr. Gero\'s Laboratory</option>
                     <option value="Planet Namek">Planet Namek</option>
                  </select>
               </div>
            </div>
    )
}