import { useState } from "react";
import "./CollectionCardsInfo.css";


const CollectionCardsInfo = (props) => {
    const [edit, setEdit] = useState(false)
    const [editCard, setEditCard] = useState(null)

    console.log(props)

    const submit = (event) => {
        event.preventDefault();
        
        setEdit(false)
    }

    let editMode = <div><img className="collectionCardsInfo__img" src={props.searchCard.img} alt="" /><h1 className="collectionCardsInfo__name">{props.searchCard.title}</h1><h2 className="collectionCardsInfo__about">{props.searchCard.content}</h2><h2 className="collectionCardsInfo__price">{props.searchCard.price}</h2><h3 className="collectionCardsInfo__extra">{props.searchCard.extraContent}</h3></div>
    if (edit === true) {
        editMode = <div><form onSubmit={submit}><img className="collectionCardsInfo__img" src={props.searchCard.img} alt="" /><input className="collectionCardsInfo__inputField" type="text" value={props.searchCard.title} /><input className="collectionCardsInfo__inputField" type="text" value={props.searchCard.content} /><input className="collectionCardsInfo__inputField" type="text" value={props.searchCard.price} /><input className="collectionCardsInfo__inputField" type="text" value={props.searchCard.extraContent} /></form></div>
    }

    return (
        <section className="collectionCardsInfo">
            {editMode}
            <button onClick={submit} className="collectionCardsInfo__saveButton">save</button>
            <button onClick={() => setEdit(!edit)} className="collectionCardsInfo__saveButton">edit</button>
        </section>
    )
}

export default CollectionCardsInfo;