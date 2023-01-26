import "./CollectionCard.css";



const CollectionCard = (props) => {

    const collectionCardClicked = () => {
        props.onCollectionCardClicked(props.id)
    }

    return(
        <div onClick={collectionCardClicked} className='collectionCard'>
        <img className='collectionCard__img' src={props.img} alt="" />
        <article className='collectionCard__article'>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </article>
      </div>
    )
}

export default CollectionCard;