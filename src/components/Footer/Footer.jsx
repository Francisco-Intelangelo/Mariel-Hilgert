import logoWhatsapp from "../../assets/Footer/brand-whatsapp.svg"
import logoInstagram from "../../assets/Footer/brand-instagram.svg"
import logoYoutube from "../../assets/Footer/brand-youtube.svg"
import logoTiktok from "../../assets/Footer/brand-tiktok.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <section className="socials">
            <a>
              <img src={logoWhatsapp} className="logo-social"/>
            </a>
            <a>
              <img src={logoInstagram} className="logo-social"/>
            </a>
            <a>
              <img src={logoYoutube} className="logo-social"/>
            </a>
            <a>
              <img src={logoTiktok} className="logo-social"/>
            </a>
          </section>
    </footer>
  )
}

export default Footer