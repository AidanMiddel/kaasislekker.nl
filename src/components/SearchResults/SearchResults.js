import { useSelector } from "react-redux";
import "./SearchResults.css"

const SearchResults = () => {
    const filterdCards = useSelector(state => { return state })

    const cardsToBeRenderd = filterdCards.map(card => {
        return (
            <div key={card.id} className='resultCard'>
                <img className='resultCard__img' src={card.img} alt="" />
                <article className='resultCard__article'>
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                </article>
            </div>
        )
    })

    return (
        <div className="resultcard__wrapper">
            {cardsToBeRenderd}
        </div>
    )
}

export default SearchResults