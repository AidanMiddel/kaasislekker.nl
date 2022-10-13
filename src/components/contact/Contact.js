import Inputfield from "../inputField/InputField"

import "./Contact.css"

const Contact = () => {
    return(
        <article className="contact">
            <h1>Contact:</h1>
            <Inputfield title="Naam:" inputPlaceholder="Uw naam" />
            <Inputfield title="E-mail" inputPlaceholder="naam@domein.nl" />
            <Inputfield title="bericht" inputPlaceholder="Uw bericht hier" />
        </article>
    )
}

export default Contact;