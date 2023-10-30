import styled from "styled-components"
import Card from "./Card"

const cards_data = [
    {
        id: 1,
        title: "Constelaciones Grupales",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando`
    },
    {
        id: 2,
        title: "Constelaciones Individuales",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó `
    },
    {
        id: 3,
        title: "Constelaciones Online",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen. `
    }
]


 const Cards = () => {
  return (
    <ContainerCards>
        {
            cards_data.map(card =>(
                <ContainerInfoCard key={card.id}>
                    <Card title={card.title} text={card.text} />
                </ContainerInfoCard>
            ))       
        }
    </ContainerCards>
  )
}
const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 700px){
        flex-direction: column;
    }
`;
const ContainerInfoCard = styled.div` 
    max-width: 260px;
    padding: 0 20px;
`;
export default Cards;