import "./Opinions.css"
import person1 from "../../assets/Home/assetsOpinions/anny.jpg"
import person2 from "../../assets/Home/assetsOpinions/noah.jpg"
import OpinionsCard from "./OpinionsCard"

const Opinions = () => {
  return (
    <section className="opinion-container">
      <div className="opinion" style={{margin:"0 22px"}}>
      <h2 className="opinion-title">Opiniones de Clientes</h2>
      <OpinionsCard img={person1} text={"Gracias a Mariel Hilgert he logrado sanar y encontrar paz en mi vida. Recomiendo sus servicios."} name={"Sandra la turra"}/>
      <OpinionsCard img={person2} text={"Las constelaciones familiares de Mariel Hilgert han sido una experiencia transformadora para mí."} name={"Pepito xd"}/>
      </div>
    </section>
  )
}

export default Opinions