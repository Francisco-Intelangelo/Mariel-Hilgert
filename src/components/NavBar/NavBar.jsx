import "./NavBar.css"
import logo from "../../assets/LogoMariel.svg"
import HomeLogo from "../../assets/NavBar/Home.svg"
// eslint-disable-next-line no-unused-vars
import Video from "../../assets/NavBar/Video.svg"
import Search from "../../assets/NavBar/Search.svg"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="section-navbar-container">
      <article className="section-navbar">
        <Link to="/">
          <img src={logo} className="logo-web-site" alt="logo pagina nuevas constelaciones familiaresd e mariel hilgert"/>
        </Link>
        <div className="icons-container">
          <NavLink to="/">
            <img src={HomeLogo} className="icon-nav" alt="logo home page"/>
          </NavLink>
          <NavLink to="/questions">
            <img src={Search} className="icon-nav" alt="logo search page"/>
          </NavLink>
        </div>
      </article>
    </nav>
  )
}

export default NavBar