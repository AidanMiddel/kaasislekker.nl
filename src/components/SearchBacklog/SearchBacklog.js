import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCards } from "../../helpers/filterCards";
import "./SearchBacklog.css"

const SearchBacklog = () => {
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch({
            type: "FILTERDCARDS",
            payload: filterCards(input, input2)
        })
    }

    return (
        <>
            <form className="search__form" onSubmit={submit}>
                <div className="search__div" >
                    <label className="search__label" htmlFor="test">Land van herkomst?</label>
                    <select className="search__input" name="test" id="test" value={input} onChange={e => setInput(e.target.value)}>
                        <option value=""></option>
                        <option value="Nederland">Nederland</option>
                        <option value="België">België</option>
                        <option value="Frankrijk">Frankrijk</option>
                        <option value="Denemarken">Denemarken</option>
                    </select>
                    <label className="search__label" htmlFor="melk">Wat voor melk?</label>
                    <select className="search__input" name="melk" id="melk" value={input2} onChange={e => setInput2(e.target.value)}>
                        <option value=""></option>
                        <option value="Koemelk">Koemelk</option>
                        <option value="Geitenmelk">Geitenmelk</option>
                    </select>
                    <button type="submit" className="search__button">zoeken</button>
                </div>
            </form>
        </>
    )
}

export default SearchBacklog;