import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll/modules";

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navigationBar">
            <ul className="navigationBar__ul">
                <li>
                    <LinkRouter className="navigationBar__Link" to="/">
                        <img className="logo" src="logo.webp" alt="" />
                    </LinkRouter>
                </li>
                <li>
                    <LinkScroll to="over" spy={true} smooth={true} offset={0} duration={500}>
                        <button className="navigationBar__Link--button">Over</button>
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll to="features" spy={true} smooth={true} offset={0} duration={500}>
                        <button className="navigationBar__Link--button">Features</button>
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll to="prijs" spy={true} smooth={true} offset={0} duration={500}>
                        <button className="navigationBar__Link--button">Prijs</button>
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        <button className="navigationBar__Link--button">Contact</button>
                    </LinkScroll>
                </li>
                <li>
                    <LinkRouter className="navigationBar__Link" to="/login">
                        <button className="navigationBar__Link--button navigationBar--login">Inloggen</button>
                    </LinkRouter>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;