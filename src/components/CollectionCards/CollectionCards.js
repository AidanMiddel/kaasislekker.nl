import React, { useState } from 'react';

import "./CollectionCards.css"

import CollectionCard from '../CollectionCard/CollectionCard';

function CollectionCards(props) {

  const onCollectionCardClicked = (idFromCollectionCard) => {
    props.changeCollectionCardId(idFromCollectionCard)
  }

  let collectionCardsToBeRenderd = props.cards.map(data => {
    return (
      <CollectionCard onCollectionCardClicked={onCollectionCardClicked} key={data.id} id={data.id} img={data.img} title={data.title} content={data.content} />
    )
  })


return (
  <div className="collectionCard__container">
    {collectionCardsToBeRenderd}
    <button className="collectionCard__addButton" onClick={() => props.addCard('/img/card1.jpg', 'New card', 'New content', '€5', 'New extra info')}>Add card</button>
  </div>
);
}

export default CollectionCards;