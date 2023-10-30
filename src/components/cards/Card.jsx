import Slider from "../Slider/Slider"
import "./Card.css"
import img1 from "../../assets/imgSlider/img1.png"
import img2 from "../../assets/imgSlider/img2.jpg"
import img3 from "../../assets/imgSlider/img3.png"

const images = [img1, img2, img3];

 const Card = (cards_data) =>{
  return (
    <div className="card-container">
      <Slider images={images} autoPlay={true} />
      <div className="info-card">
        <h3 className="title-card">{cards_data.title}</h3>
        <p className="txt-card">{cards_data.text}</p>
        <a href="#" className="button-card">Contratar servicio</a>
      </div>
    </div>
  )
}
export default Card