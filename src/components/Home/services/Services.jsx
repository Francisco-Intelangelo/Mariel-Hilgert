import "./Services.css"
import gato from "../../../assets/Home/assetsServices/gato.jpg"
import po from "../../../assets/Home/assetsServices/po.jpg"
import bugs from "../../../assets/Home/assetsServices/bugs.jpg"
import ServicesCard from "./ServicesCard"
const Services = () => {
  return (
    <section className="services-container">
      <article className="services" style={{margin:"0 22px"}}>
        <h2 className="services-title">Servicios</h2>
        <div className="services-container-card">
          <ServicesCard img={gato} title={"Constelaciones Online"} linkPage="/reservation"/>
          <ServicesCard img={po} title={"Cursos y talleres grupales"} linkPage="/reservation"/>
          <ServicesCard img={bugs} title={"Titulados por Insconfa"} linkPage="/reservation"/>
        </div>
      </article>
    </section>
  )
}

export default Services