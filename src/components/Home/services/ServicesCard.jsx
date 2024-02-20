import "./Services.css"
// eslint-disable-next-line react/prop-types
const ServicesCard = ({img, title}) => {
  return (
    <article className="service-card">
      <img src={img} className="services-photo" alt=""/>
      <div>
          <h4 className="caption-services">{title}</h4>
          <button className="see-more">Ver más</button>
      </div>
    </article>
  )
}

export default ServicesCard