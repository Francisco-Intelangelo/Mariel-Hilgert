import './Home.css'
import img1 from "../assets/images/imgSlider/img1.png"
import img2 from "../assets/images/imgSlider/img2.jpg"
import img3 from "../assets/images/imgSlider/img3.png"
import Slider from '../components/Slider/Slider'

const images = [img1, img2, img3];

const Home = () => {
  return (
    <main className='main-container'>
        <section className="hero-container">
          <h1 className="hero-title"><span className='first'>Nuevas </span><span className='second'>Constelaciones </span><span className='third'>Familiares</span></h1>
          <h2 className="hero-caption">Mariel Hilgert</h2>
        </section>
        <Slider images={images} autoPlay={true}/>
        <Slider images={images} autoPlay={true}/>
        <Slider images={images} autoPlay={true}/>
        <Slider images={images} autoPlay={true}/>
    </main>
  )
}

export default Home