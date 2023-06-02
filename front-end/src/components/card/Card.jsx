import config from "../../config/config"

function Card({athlete, setAthlete}) {

  const deleteAth = async () => {

    await fetch(`${config.API_athletes_delete}/${athlete.id}`, {
      method: 'DELETE',
     
    })
 window.location.reload()
  }

  return (
    <div key={athlete.id} className="list-cards">
    <div className="text-container">
      <p>{athlete.nom}</p>
      <p>Sport</p>
      <p>Epreuves</p>
      <p>Medaille</p>

    </div>

    <div className="button-container">
      <button className="button">Modify</button>
      <button onClick={deleteAth} className="button">Delete</button>
    </div>
  </div>
  )
}

export default Card




