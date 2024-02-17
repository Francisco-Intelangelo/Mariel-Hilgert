import "./Services.css"
import servicesImg1 from "../../assets/Home/assetsServices/ejemplo1.jpg"
import servicesImg2 from "../../assets/Home/assetsServices/ejemplo2.jpg"
const Services = () => {
  return (
    <section className="services-container">
      <div className="services" style={{margin:"0 22px"}}>
      <h2 className="services-title">Servicios</h2>
      <section className="const-online">
        <img src={servicesImg1} className="services-photo" alt=""/>
        <div>
          <h4 className="caption-services">Constelaciones online</h4>
          <button className="see-more">Ver más</button>
        </div>
      </section>
      <section className="curses-grup">
        <img src={servicesImg2} className="services-photo" alt=""/>
        <div>
          <h4 className="caption-services">Cursos y talleres grupales</h4>
          <button className="see-more">Ver más</button>
        </div>
      </section>
      </div>
    </section>
  )
}

export default Services