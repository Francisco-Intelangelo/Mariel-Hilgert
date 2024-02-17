import "./Hero.css"
const Hero = () => {
  return (
    <article className="hero-container">
      <section className="hero">
        <h1 className="hero-title">
          <span className="span-title">Nuevas</span>
          <span className="span-title">Constelaciones</span>
          <span className="span-title">Familiares</span>
        </h1>
        <h4 className="hero-caption">Mariel Hilgert</h4>
        <p className="hero-txt">Mejora tu calidad de vida, relaciones y crece personalmente</p>
      </section>
    </article>
  )
}

export default Hero