import Card from "../components/card/Card.jsx";
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
  <main className="page-container">
<h2 className="title-page">Les Athlètes gagnants</h2>
    <div className='crud-container'>
   {athlete.length > 0 && athlete.map((ath, index) => (
     <Card athlete={ath} 
     key={index}
     setAthlete={setAthlete}
     />
      ))}
 </div>
      </main>
      </>
)

}

export default Athlete