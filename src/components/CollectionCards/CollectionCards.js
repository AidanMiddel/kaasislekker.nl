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
  </div>
);
}

export default CollectionCards;