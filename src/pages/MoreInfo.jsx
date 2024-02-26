import "../components/MoreInfo/MoreInfo.css"
import MoreInfoCard from "../components/MoreInfo/MoreInfoCard"
export const MoreInfo = () => {
  return (
    <section className="moreinfo-container">
      <article className="moreinfo">
        <h1 className="moreinfo-title">Las Fuerzas del Amor</h1>
        <MoreInfoCard title={"Asentimiento"}>
          <p className="text-moreinfo-card">A todo como es y a todos como son, amar es aceptar incondicionalmente la vida como es, al otro como es y a mi mismo como soy. Esta fuerza incluye a las otras tres y es la más exigente de todas, por lo tanto la más sanadora, esta fuerza nos habla de un amor no emocional, sino de un amor existencial, todo es querido y amado así tal y como es por la energía creadora, nada queda excluido para esa energía creadora, todos son como tienen que ser y así son amados, por el sólo hecho de Ser.</p>
        </MoreInfoCard>
        <MoreInfoCard title={"Orden"}>
          <p className="text-moreinfo-card">Aceptar la vida, es aceptar la vida dada por nuestros padres, es aceptar ser hijos de esos padres, es decir, aceptar nuestro lugar, aceptar que nuestra vida la determinan nuestro nacimiento y nuestro lugar en la familia de origen. Amar es reconocer que la vida está organizada por el orden. Cada elemento de la vida tiene su lugar específico determinado por su fecha de entrada en los sistemas, ni la herencia, ni los méritos propios nos permiten decidir nuestro lugar.</p>
        </MoreInfoCard>
        <MoreInfoCard title={"Pertenencia"}>
          <p className="text-moreinfo-card">Esta fuerza del Amor nos dice que todos tiene el mismo derecho a la pertenencia, todos pertenecen por igual, haya pasado lo que haya pasado.<br/> El movimiento de esta fuerza es el de la inclusión y el respeto de la diferencia, todos son distintos y todos tienen el mismo derecho a pertenecer.</p>
        </MoreInfoCard>
        <MoreInfoCard title={"Equilibrio"}>
          <p className="text-moreinfo-card">La compensación entre ganancias y pérdidas, es decir, el equilibrio entre dar y recibir, es la fuerza que transforma las polaridades en una nueva realidad, es la fuerza que crea los saltos cuánticos.<br/> Estas fuerzas son constantes inexorables, están presentes en todos los sistemas vivos, son el armazón de la vida, su presencia no se percibe mas que por sus efectos, son campos de fuerza al servicio de la vida.</p>
        </MoreInfoCard>
      </article>
    </section>
  )
}
