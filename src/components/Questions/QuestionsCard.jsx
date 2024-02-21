import "./Questions.css"

// eslint-disable-next-line react/prop-types
const QuestionsCard = ({summary, children}) => {

  return (
      <details>
        <summary>{summary}</summary>
        {children}
      </details>
  )
}

export default QuestionsCard