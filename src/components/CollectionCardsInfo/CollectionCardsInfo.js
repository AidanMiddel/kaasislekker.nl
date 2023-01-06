import "./CollectionCardsInfo.css";

const CollectionCardsInfo = (props) => {
    return(
        <section className="collectionCardsInfo">
            <img className="collectionCardsInfo__img" src="img/card1.jpg" alt="" />
            <h1 className="collectionCardsInfo__name">naam</h1>
            <h2 className="collectionCardsInfo__about">omschrijving</h2>
            <h2 className="collectionCardsInfo__price">prijs</h2>
            <h3 className="collectionCardsInfo__extra">extra info</h3>
            <button className="collectionCardsInfo__saveButton">save</button>
        </section>
    )
}

export default CollectionCardsInfo;