import "./loginField.css"
import { Link } from "react-router-dom";

const LoginField = () => {
    return (
        <article className="login__article">
            <section className="login__section">
                <p className="login__header">E-mailadres:</p>
                <input className="login__input" type="text" />
                <p className="login__header">Wacthwoord:</p>
                <input className="login__input" type="text" />
                <Link to="/collection">
                    <button className="login__button">Log-in</button>
                </Link>
            </section>
        </article>
    )
}

export default LoginField;