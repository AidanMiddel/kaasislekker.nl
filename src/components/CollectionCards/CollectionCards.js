import React, { useState } from 'react';
import "./CollectionCards.css"

function CollectionCards() {
  const [cards, setCards] = useState([
    { id: 1, img:'/img/card1.jpg', title: 'Card 1', content: 'Content for card 1' },
    { id: 2, img:'/img/card2.jpg', title: 'Card 2', content: 'Content for card 2' },
    { id: 2, img:'/img/card3.jpg', title: 'Card 3', content: 'Content for card 2' },
  ]);
  const [editingCard, setEditingCard] = useState(null);

  const addCard = (title, content) => {
    const newCard = { id: Date.now(), title, content };
    setCards([...cards, newCard]);
  }

  const updateCard = (id, img, title, content) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { id, img, title, content };
      }
      return card;
    });
    setCards(updatedCards);
  }

  const deleteCard = id => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  }

  const handleEdit = card => {
    setEditingCard(card);
  }

  const handleSubmit = event => {
    event.preventDefault();
    updateCard(editingCard.id, event.target.title.value, event.target.content.value);
    setEditingCard(null);
  }

  return (
      <div className="collectionCard__container collectionCards">
        {cards.map(card => (
          <div className="collectionCard" key={card.id}>
            {editingCard && editingCard.id === card.id ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" />
                <br />
                <label htmlFor="content">Content:</label>
                <input type="text" id="content" name="content" />
                <br />
                <button type="submit">Save</button>
                <button onClick={() => setEditingCard(null)}>Cancel</button>
              </form>
            ) : (
              <>
                <img className='collectionCard__img' src={card.img} alt="" />
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <button onClick={() => deleteCard(card.id)}>Delete</button>
                <button onClick={() => handleEdit(card)}>Edit</button>
              </>
            )}
          </div>
        ))}
        <button className="collectionCard__addButton" onClick={() => addCard('New card', 'New content')}>Add card</button>
      </div>
  );
}

export default CollectionCards;