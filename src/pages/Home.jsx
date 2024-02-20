import Hero from "../components/Home/hero/Hero"
import Info from "../components/Home/info/Info"
import Opinions from "../components/Home/opinions/Opinions"
import Services from "../components/Home/services/Services"
import Contact from "../components/Home/contact/Contact"

const Home = () => {
  return (
    <>
      <Hero/>
      <Info/>
      <Services/>
      <Opinions/>
      <Contact/>
    </>
  )
}

export default Home