import Inputfield from "../inputField/InputField"

import "./Contact.css"

const Contact = (props) => {

    const submitContact = () => {
        alert("Bericht verzonden")
    }

    return(
        <article className="contact" id={props.id}>
            <h1>Contact:</h1>
            <Inputfield title="Naam:" inputPlaceholder="Uw naam" />
            <Inputfield title="E-mail" inputPlaceholder="naam@domein.nl" />
            <Inputfield title="bericht" inputPlaceholder="Uw bericht hier" />
            <button onClick={submitContact} className="sendButton">verzenden</button>
        </article>
    )
}

export default Contact;