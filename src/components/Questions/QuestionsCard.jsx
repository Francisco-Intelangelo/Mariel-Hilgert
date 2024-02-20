import "./Questions.css"

const QuestionsCard = () => {
  
  const questionsInfo = [
    {
      id: 1,
      question: "¿ Porqué Nuevas Constelaciones ?",
      content: `Ya en 2001 Bert Hellinger decía que en el campo actuaban fuerzas y que el constelador era el catalizador de esas fuerzas, insistía en el centramiento del constelador como elemento decisivo en la eficacia de la constelación, el constelador NO hace sino que espera y se deja guiar por el movimiento del espíritu, cuando se inicia una reconciliación la sanación se dará por sí sola. A partir del momento en que Bert Hellinger descubre el amor del espíritu y la pertenencia de todos su praxis cambia, comienza a hablar de Nuevas constelaciones y como lo ha reiterado en numerosas ocasiones… las constelaciones son la herramienta nacida de un pensamiento filosófico, si el pensamiento cambia la herramienta también, si soltamos la seguridad de lo viejo. En 2010 después de accidentes y enfermedades que le abrieron los ojos, manifiesta con vehemencia que toda la constelación es dirigida por otras fuerzas, que había perdido de vista la esencia de las constelaciones al pretender controlar lo que tenían que hacer o decir los representantes, insistía en que todo está en manos del campo, Bert había creado el campo mórfico del amor del espíritu.
      `,
    }
  ]

  return (
    <article>
      <details>
        <summary>${questionsInfo.question}</summary>
        ${questionsInfo.content}
      </details>
    </article>
  )
}

export default QuestionsCard