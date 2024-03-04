import { NavLink } from "react-router-dom"
import "./Info.css"
import arrowRight from "../../../assets/Home/assetsInfo/arrow-narrow-right.svg"
import star from "../../../assets/Home/assetsInfo/star-filled.svg"
const Info = () => {
  return (
    <section className="info-home-container">
      <article>
        <h3 className="info-title-home">Sobre las nuevas constelaciones familiares</h3>
        <p className="info-home">
          Las constelaciones son un servicio a la vida. Son la filosofía del amor adulto, del amor en acción, amor existencial que lo acepta todo como es, basadas en una visión sistémica de la vida y en las Fuerzas del Amor.
          <br/><br/>
          <img src={star} className="icon-star"/> Si, aceptación, asentimiento.<br/>
          <img src={star} className="icon-star"/> Orden.<br/>
          <img src={star} className="icon-star"/> Pertenencia, inclusión.<br/>
          <img src={star} className="icon-star"/> Equilibrio, compensación.<br/><br/>
          Nos permiten descubrir la realidad oculta que dirige nuestras decisiones, nuestras emociones y nuestros destinos. Nos llevan a una apertura de la conciencia que va a empezar a transformar nuestra vida. Las constelaciones nos ayudan a estar más vivos, en la fuerza y la responsabilidad del adulto, y a estar centrados en el respeto y en la gratitud. Y con ello nuestras vidas empiezan a cambiar, nos muestran el camino hacia nuestra autonomía y mayor bienestar.
        </p>
        <NavLink className="btn-more-info" to="/moreinfo">Más info <img src={arrowRight} className="arrow-right" alt="img arrow right"/></NavLink>
      </article>
    </section>
  )
}

export default Info