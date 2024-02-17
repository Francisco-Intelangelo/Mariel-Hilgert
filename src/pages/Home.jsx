import Hero from "../components/hero/Hero"
import Info from "../components/info/Info"
import Opinions from "../components/opinions/Opinions"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"

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