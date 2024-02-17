import "./Opinions.css"
import person1 from "../../assets/Home/assetsOpinions/anny.jpg"
import person2 from "../../assets/Home/assetsOpinions/noah.jpg"

const Opinions = () => {
  return (
    <section className="opinion-container">
      <div className="opinion" style={{margin:"0 22px"}}>
      <h2 className="opinion-title">Opiniones de Clientes</h2>
      <section className="person-info">
        <img src={person1} className="person-photo" alt=""/>
        <div>
          <p className="opinion-txt">
            Gracias a Mariel Hilgert he logrado sanar y encontrar paz en mi vida. Recomiendo sus servicios.
          </p>
        </div>
      </section>
      <section className="person-info">
        <img src={person2} className="person-photo" alt=""/>
        <div>
          <p className="opinion-txt">
            Las constelaciones familiares de Mariel Hilgert han sido una experiencia transformadora para mí.
          </p>
        </div>
      </section>
      </div>
    </section>
  )
}

export default Opinions