import config from "../../config/config";
import "./Button.css"
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
        <div className="button-container-add">
        <input className="input-add" type="text" onChange={(event
        ) => {
          setValue(event.target.value) 
        }}/>
        <button className="button-add" type="onSubmit" onClick={updateSport}>Add</button>
        </div>
  )
}

export default Button