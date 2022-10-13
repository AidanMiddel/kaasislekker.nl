import "./InputField.css"

const InputeField = (props) => {
    return (
        <article className="article">
            <p className="title">{props.title}</p>
            <input className="input" type="input" placeholder={props.inputPlaceholder} />
        </article>
    )
}

export default InputeField;