import Hero from "../assets/Home/hero/Hero"
import Info from "../assets/Home/info/Info"
import Opinions from "../assets/Home/opinions/Opinions"
import Services from "../assets/Home/services/Services"
import Contact from "../assets/Home/contact/Contact"

const Home = () => {
  return (
    <>
      <main>
        <Hero/>
        <Info/>
        <Services/>
        <Opinions/>
        <Contact/>
      </main>
    </>
  )
}

export default Home