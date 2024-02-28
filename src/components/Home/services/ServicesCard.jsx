import { NavLink } from "react-router-dom"
import "./Services.css"
// eslint-disable-next-line react/prop-types
const ServicesCard = ({img, title, linkPage}) => {
  return (
    <article className="service-card">
      <img src={img} className="services-photo" alt="" loading="lazy"/>
      <div>
          <h4 className="caption-services">{title}</h4>
          <NavLink className="see-more" to={linkPage}>Ver más</NavLink>
      </div>
    </article>
  )
}

export default ServicesCard