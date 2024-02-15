import "./Contact.css"
const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact" style={{margin:"0 22px"}}>
      <h2 className="contact-title">Contacto</h2>
      <p className="more-info-mail">Para más información, contáctanos:<br/>marielhilgert@gmail.com</p>
      <form className="contact-form">
        <label className="label">
          Nombre*
          <input className="input"/>
        </label>
        <label className="label">
          Email*
          <input className="input"/>
        </label>
        <label className="label">
          Mensaje*
          <textarea className="textarea"/>
        </label>
        <button className="btn-submit">Enviar</button>
      </form>
      </div>
    </section>
  )
}

export default Contact