import Header from "../components/header/Header.jsx";
import config from "../config/config.js";
import "./Pages.css"
import { useEffect, useState } from "react";



function Athlete() {

    const [athlete, setAthlete] = useState([]);

   
  useEffect(() => {
    fetch(config.API_athletes)
    .then((response) => {
       return response.json()
    })
    .then((result) => {
        setAthlete(result);
        console.log(result);
    })
    
}, []);



return(
  <>
  <Header/>
    <div className='crud-container'>
   {athlete.map((ath) => (
     <div key={ath.id} className="list-cards">
          <div className="text-container">
            <p>{ath.nom}</p>
            <p>{ath.nom}</p>

          </div>

          <div className="button-container">
            <button className="button">Modify</button>
            <button className="button">Delete</button>
          </div>
        </div>
      ))}
      <div>

  
      </div>
 </div>
      </>
)

}

export default Athlete