import { Link } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navigationBar">
            <Link className="navigationBar__Link" to="/">
                <li>
                    <img className="logo" src="logo.png" alt="" />
                </li>
            </Link>
            <Link className="navigationBar__Link" to="/over">
                <li>
                    <button className="navigationBar__Link--button">Over</button>
                </li>
            </Link>
            <Link className="navigationBar__Link" to="/feature">
                <li>
                    <button className="navigationBar__Link--button">Features</button>
                </li>
            </Link>
            <Link className="navigationBar__Link" to="/prijs">
                <li>
                    <button className="navigationBar__Link--button">Prijs</button>
                </li>
            </Link>
            <Link className="navigationBar__Link" to="/contact">
                <li>
                    <button className="navigationBar__Link--button">Contact</button>
                </li>
            </Link>
            <Link className="navigationBar__Link" to="/login">
                <li>
                    <button className="navigationBar__Link--button navigationBar--login">Inloggen</button>
                </li>
            </Link>
        </div>
    )
}

export default Navbar;