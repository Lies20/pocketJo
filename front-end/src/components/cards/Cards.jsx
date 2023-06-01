import "./Cards.css"

function Cards({sport}) {
  return (
    <div className='crud-container'>
       <div className="text-container">
       <p>{sport.nom}</p> 
       <p>{sport.nom}</p> 
       <p>{sport.nom}</p> 
       </div>

       <div className="button-container">
        <button className="button">Delete</button>
        <button className="button">Modify</button>
       </div>
       
    </div>
  )
}

export default Cards