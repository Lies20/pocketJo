import config from "../../config/config";
import { useState } from "react";

function Button() {
        
  const [sports, setSports] = useState([]);
  const [value, setValue] = useState("");
    
  const updateSport = async () => {
  
        await fetch(config.API_sports, {
          method: 'POST',
          body: JSON.stringify({
            "nom":value
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          setSports(result);
          console.log(result);
        })
      }
    return (
        <>
        <input type="text" onChange={(event
        ) => {
          setValue(event.target.value) 
        }}></input>
        <button type="onSubmit" onClick={updateSport}>Add</button>
        </>
  )
}

export default Button