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

    const saveButtonClicked = (title, content, price, extraContent) => {
        let productCards = [...cards];
        let newState = productCards.map(product => {
            if(searchCard.id ===product.id){
                product.title = title;
                product.content = content;
                product.price = price;
                product.extraContent = extraContent;
                return product
            }
            else{
                return product;
            }
        })
        setCards(newState);
    }

    return (
        <section className="collectionCardsWrapper">
            <CollectionCardsInfo searchCard={searchCard} setCards={setCards } saveButtonClicked={saveButtonClicked}/>
            <CollectionCards cards={cards} addCard={addCard} changeCollectionCardId={changeCollectionCardId}/>
        </section>
    )
}

export default CollectionCardsWrapper;