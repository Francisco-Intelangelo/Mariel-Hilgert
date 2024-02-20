import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact-container">
      <article className="contact">
        <div className="contact-text">
          <h2 className="contact-title">Contacto</h2>
          <p className="more-info-mail">Para más información, contáctanos:<br/>marielhilgert@gmail.com</p>
        </div>
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
      </article>
    </section>
  )
}

export default Contact