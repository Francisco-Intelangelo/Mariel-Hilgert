import "./Info.css"
import arrowRight from "./arrow-narrow-right.svg"
const Info = () => {
  return (
    <section className="info-home-container">
      <article>
        <h3 className="info-title-home">Sobre las nuevas constelaciones familiares</h3>
        <p className="info-home">
          Las constelaciones son un servicio a la vida. Son la filosofía del amor adulto, del amor en acción, amor existencial que lo acepta todo como es, basadas en una visión sistémica de la vida y en las Fuerzas del Amor.
          <br/><br/>
          ⭐ Si, aceptación, asentimiento.<br/>
          ⭐ Orden.<br/>
          ⭐ Pertenencia, inclusión.<br/>
          ⭐ Equilibrio, compensación.<br/><br/>
          Nos permiten descubrir la realidad oculta que dirige nuestras decisiones, nuestras emociones y nuestros destinos. Nos llevan a una apertura de la conciencia que va a empezar a transformar nuestra vida. Las constelaciones nos ayudan a estar más vivos, en la fuerza y la responsabilidad del adulto, y a estar centrados en el respeto y en la gratitud. Y con ello nuestras vidas empiezan a cambiar, nos muestran el camino hacia nuestra autonomía y mayor bienestar.
        </p>
        <button className="btn-more-info">Mas info <img src={arrowRight} className="arrow-right" alt="img arrow right"/></button>
      </article>
    </section>
  )
}

export default Info