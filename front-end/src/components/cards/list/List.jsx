import "./List.css"
import axios from "axios";
import config from "../../../config/config.js";
import { useEffect, useState } from "react";



function List() {

    const [sports, setSports] = useState([]);

   
  useEffect(() => {
    fetch(config.API_URL)
    .then((response) => {
       return response.json()
    })
    .then((result) => {
        setSports(result);
        console.log(result);
    })
    
}, []);



return(
    <div className='crud-container'>
   {sports.map((sport) => (
        <div key={sport.id} className="list-cards">
          <div className="text-container">
            <p>{sport.nom}</p>
          </div>

          <div className="button-container">
            <button className="button">Modify</button>
          </div>
        </div>
      ))}
      <div>

      {setSports[0]}
      </div>
 </div>
)

}

export default List