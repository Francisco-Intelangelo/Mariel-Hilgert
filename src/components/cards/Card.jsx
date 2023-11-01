import "./Card.css"

 const Card = (cards_data) =>{
  return (
    <div className="card-container">
      <div className="info-card">
        <h3 className="title-card">{cards_data.title}</h3>
        <p className="txt-card">{cards_data.text}</p>
        <a className="button-card" href="#">Solicitar Turno</a>
      </div>
    </div>
  )
}
export default Card