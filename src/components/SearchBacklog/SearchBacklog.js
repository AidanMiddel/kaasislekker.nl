import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCards } from "../../helpers/filterCards";
import "./SearchBacklog.css"

const SearchBacklog = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

   
    const onInputChanged = (event) => {
        setInput(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        dispatch({
            type: "FILTERDCARDS",
            payload: filterCards(input)
        })
    }
    return (
        <>
            <form className="search__form" onSubmit={submit}>
                <div className="search__div">
                    <label className="search__label" htmlFor="test">Naar welke kaas bent U opzoek?</label>
                    <input className="search__input" onChange={onInputChanged} id="test" type="text" value={input} />
                    <button className="search__button" onClick={submit}>zoeken</button>
                </div>
            </form>
        </>
    )
}

export default SearchBacklog;