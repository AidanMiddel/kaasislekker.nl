import React, { useState } from 'react';

import "./CollectionCards.css"

import CollectionCardsData from '../../data/CollectionCardsData';

function CollectionCards() {
  const [cards, setCards] = useState(CollectionCardsData);

  let collectionCardsToBeRenderd = cards.map(data => {
    return (
      <div className='collectionCard'>
        <img className='collectionCard__img' src={data.img} alt="" />
        <article className='collectionCard__article'>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </article>
      </div>
    )
  })

const addCard = (img, title, content) => {
  const newCard = { id: cards.length + 1, img, title, content };
  setCards([...cards, newCard]);
}

return (
  <div className="collectionCard__container">
    {collectionCardsToBeRenderd}
    <button className="collectionCard__addButton" onClick={() => addCard('/img/card1.jpg', 'New card', 'New content')}>Add card</button>
  </div>
);
}

export default CollectionCards;