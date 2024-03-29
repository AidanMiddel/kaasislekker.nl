import { Link as LinkRouter } from "react-router-dom";
import "../navbar/Navbar.css"

const navbarCollection = () => {

    const share = () =>{
        navigator.clipboard.writeText('https://www.kaasislekker.nl')
        alert("Link naar site is gekopiëerd!")
    }
    return (
        <nav className="navigationBar">
            <ul className="navigationBar__ul">
                <li>
                    <LinkRouter className="navigationBar__Link" to="/">
                        <img className="logo" src="logo.webp" alt="" />
                    </LinkRouter>
                </li>
                <li>
                    <LinkRouter className="navigationBar__Link" to="/collection">
                        <button className="navigationBar__Link--button">Collection</button>
                    </LinkRouter>
                </li>
                <li>
                    <LinkRouter className="navigationBar__Link" to="/searchpage">
                        <button className="navigationBar__Link--button">Backlog</button>
                    </LinkRouter>
                </li>
                <li>
                    <LinkRouter className="navigationBar__Link" to="/">
                        <button className="navigationBar__Link--button">Log uit</button>
                    </LinkRouter>
                </li>
                <li>
                    <button onClick={share} className="navigationBar__Link--button navigationBar--login">Delen</button>
                </li>
            </ul>
        </nav >
    )
}

export default navbarCollection;