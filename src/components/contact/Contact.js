import Inputfield from "../inputField/InputField"

import "./Contact.css"

const Contact = () => {
    return(
        <article className="contact">
            <h1>Contact:</h1>
            <Inputfield title="Name" inputPlaceholder="Your name" />
            <Inputfield title="E-mail" inputPlaceholder="name@domain.com" />
            <Inputfield title="message" inputPlaceholder="Your message here" />
        </article>
    )
}

export default Contact;