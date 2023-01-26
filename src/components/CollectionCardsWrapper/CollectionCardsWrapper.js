import "./CollectionCardsWrapper.css";
import CollectionCardsInfo from "../CollectionCardsInfo/CollectionCardsInfo";
import CollectionCardsData from "../../data/CollectionCardsData";
import CollectionCards from "../CollectionCards/CollectionCards";
import { useState } from "react";

const CollectionCardsWrapper = (props) => {
    const [cards, setCards] = useState(CollectionCardsData);

    const [collectCardId, setCollectionCardId] = useState(1)
    
    const changeCollectionCardId = (idFromCollectionCard) => {
        setCollectionCardId(idFromCollectionCard);
    }

    const addCard = (img, title, content, price, extraContent) => {
        const newCard = { id: cards.length + 1, img, title, content, price, extraContent };
        setCards([...cards, newCard]);
      }

    const searchCard = cards?.find((item) => {return item.id === collectCardId});

    return (
        <section className="collectionCardsWrapper">
            <CollectionCardsInfo searchCard={searchCard} setCards={setCards }/>
            <CollectionCards cards={cards} addCard={addCard} changeCollectionCardId={changeCollectionCardId}/>
        </section>
    )
}

export default CollectionCardsWrapper;