import "./MoreInfo.css"

// eslint-disable-next-line react/prop-types
const MoreInfoCard = ({title, children}) => {
  return (
    <article className="article-moreinfo-card">
      <h3 className="title-moreinfo-card">{title}</h3>
      {children}
    </article>
  )
}

export default MoreInfoCard