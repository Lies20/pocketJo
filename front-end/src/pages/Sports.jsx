import { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import config from '../config/config.js'
import axios from "axios"


function Sports()
{ 
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


  return (
    <div>
      <Header />
      <h1> Liste des Sports</h1>
      
    </div>
  )
}

export default Sports
