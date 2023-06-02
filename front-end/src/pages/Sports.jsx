import Header from '../components/header/Header'
import config from '../config/config.js'
import { useState, useEffect } from 'react';

function Sports() {

  const [sports, setSports] = useState([]);


  useEffect(() => {
    fetch(config.API_sports)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setSports(result);
        console.log(result);
      })
  }, []);

  const updateSport = async () => {
    
    await fetch(config.API_sports_patch, {
      method: 'PATCH',
      body: JSON.stringify({
        
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      setAthlete(result);
      console.log(result);
    })
  }

  return (
    <>
     <Header/>
      <div className='crud-container'>
   {sports.map((sport) => (
        <div key={sport.id} className="list-cards">
          <div className="text-container">
            <p>{sport.nom}</p>
          </div>

          <div className="button-container">
            <button onClick={updateSport} className="button">Modify</button>
          </div>
        </div>
      ))}
      <div>
      </div>
 </div>
    </>
  )
}

export default Sports