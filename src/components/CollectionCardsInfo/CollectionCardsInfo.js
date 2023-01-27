import { useEffect } from "react";
import { useState } from "react";
import "./CollectionCardsInfo.css";


const CollectionCardsInfo = (props) => {
    const [edit, setEdit] = useState(false)
    const [editCard, setEditCard] = useState("")
    const [titleState, setTitlestate] = useState("")
    const [contentState, setContentState] = useState("")
    const [priceState, setPriceState] = useState("")
    const [extraContentState, setExtraContentState] = useState("")

    useEffect(() => {
        setEditCard(props.searchCard)
        setTitlestate(props.searchCard.title)
        setContentState(props.searchCard.content)
        setPriceState(props.searchCard.price)
        setExtraContentState(props.searchCard.extraContent)
    }, [props.searchCard])

    const handleTitle = (event) => {
        setTitlestate(event.target.value)
    }

    const handleContent = (event) => {
        setContentState(event.target.value)
    }

    const handlePrice = (event) => {
        setPriceState(event.target.value)
    }

    const handleExtraContent = (event) => {
        setExtraContentState(event.target.value)
    }

    console.log(props)

    const submit = (event) => {
        event.preventDefault();
        saveCard()
        setEdit(false)
    }
    const saveCard = () => {
        props.saveButtonClicked(titleState, contentState, priceState, extraContentState)
    }

    let editMode = (
        <div>
            <img className="collectionCardsInfo__img" src={props.searchCard.img} alt="" />
            <h1 className="collectionCardsInfo__name">{props.searchCard.title}</h1>
            <h2 className="collectionCardsInfo__about">{props.searchCard.content}</h2>
            <h2 className="collectionCardsInfo__price">{props.searchCard.price}</h2>
            <h3 className="collectionCardsInfo__extra">{props.searchCard.extraContent}</h3>
            <button onClick={() => setEdit(!edit)} className="collectionCardsInfo__saveButton">edit</button>
        </div>
    )
    if (edit === true) {
        editMode = (
            <div>
                <form className="collectionCardsInfo__form" onSubmit={submit}>
                    <img className="collectionCardsInfo__img" src={props.searchCard.img} alt="" />
                    <input className="collectionCardsInfo__inputField collectionCardsInfo__textEara" type="text" value={titleState} onChange={handleTitle} />
                    <textarea className="collectionCardsInfo__inputField" type="text" rows={4} value={contentState} onChange={handleContent} />
                    <input className="collectionCardsInfo__inputField" type="text" value={priceState} onChange={handlePrice} />
                    <textarea className="collectionCardsInfo__inputField collectionCardsInfo__textEara" rows={10} type="text" value={extraContentState} onChange={handleExtraContent} />
                    <button onClick={submit} className="collectionCardsInfo__saveButton">save</button>
                </form>
            </div>)
    }

    return (
        <section className="collectionCardsInfo">
            {editMode}
        </section>
    )
}

export default CollectionCardsInfo;