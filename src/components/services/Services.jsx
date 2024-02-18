import "./Services.css"
import gato from "../../assets/Home/assetsServices/gato.jpg"
import po from "../../assets/Home/assetsServices/po.jpg"
import bugs from "../../assets/Home/assetsServices/bugs.jpg"
import ServicesCard from "./ServicesCard"
const Services = () => {
  return (
    <section className="services-container">
      <div className="services" style={{margin:"0 22px"}}>
      <h2 className="services-title">Servicios</h2>
      <ServicesCard img={gato} title={"Constelaciones Online"}/>
      <ServicesCard img={po} title={"Cursos y talleres grupales"}/>
      <ServicesCard img={bugs} title={"Titulados por Insconfa"} />
      </div>
    </section>
  )
}

export default Services