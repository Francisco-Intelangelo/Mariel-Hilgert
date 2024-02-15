import Home from "../pages/Home"
import logo from "../assets/LogoMariel.svg"
import HomeLogo from "../assets/NavBar/Home.svg"
import Video from "../assets/NavBar/Video.svg"
import Search from "../assets/NavBar/Search.svg"
import "./NavBar.css"
const NavBar = () => {
  return (
    <section className="section-navbar-container">
      <section className="section-navbar">
        <a href={<Home/>}>
          <img src={logo} className="logo-web-site"   alt="logo pagina nuevas constelaciones  familiaresd e mariel hilgert"/>
        </a>
        <div className="icons-container">
          <a href={<Home/>}>
            <img src={HomeLogo} className="icon-nav"  alt="logo home page"/>
          </a>
          <a href={<Home/>}>
            <img src={Video} className="icon-nav" alt="logo   video page"/>
          </a>
          <a href={<Home/>}>
            <img src={Search} className="icon-nav" alt="logo search page"/>
          </a>
        </div>
      </section>
    </section>
  )
}

export default NavBar