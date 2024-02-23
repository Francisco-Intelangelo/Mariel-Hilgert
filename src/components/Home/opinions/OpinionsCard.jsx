import "./Opinions.css"
// eslint-disable-next-line react/prop-types
const OpinionsCard = ({img, name, text}) => {
  return (
    <article className="service-card">
      <img src={img} className="person-photo" alt="photo of customer" loading="lazy"/>
      <div>
          <p className="opinion-txt">{text}</p>
          <h4 className="name-people">{name}</h4>
      </div>
    </article>
  )
}

export default OpinionsCard 