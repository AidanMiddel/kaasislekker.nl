import "./CollectionCardsInfo.css";


const CollectionCardsInfo = (props) => {

    const searchCard = props.cards?.find((item) => {return item.id === props.collectCardId})

    return(
        <section className="collectionCardsInfo">
            <img className="collectionCardsInfo__img" src={searchCard.img} alt="" />
            <h1 className="collectionCardsInfo__name">{searchCard.title}</h1>
            <h2 className="collectionCardsInfo__about">{searchCard.content}</h2>
            <h2 className="collectionCardsInfo__price">{searchCard.price}</h2>
            <h3 className="collectionCardsInfo__extra">{searchCard.extraContent}</h3>
            <button className="collectionCardsInfo__saveButton">save</button>
        </section>
    )
}

export default CollectionCardsInfo;