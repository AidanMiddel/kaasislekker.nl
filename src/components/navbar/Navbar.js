import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll/modules";

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navigationBar">
            <LinkRouter className="navigationBar__Link" to="/">
                <li>
                    <img className="logo" src="logo.png" alt="" />
                </li>
            </LinkRouter>
            <LinkScroll to="over" spy={true} smooth={true} offset={0} duration={500}>
                <li>
                    <button className="navigationBar__Link--button">Over</button>
                </li>
            </LinkScroll>
            <LinkScroll to="features" spy={true} smooth={true} offset={0} duration={500}>
                <li>
                    <button className="navigationBar__Link--button">Features</button>
                </li>
            </LinkScroll>
            <LinkScroll to="prijs" spy={true} smooth={true} offset={0} duration={500}>
                <li>
                    <button className="navigationBar__Link--button">Prijs</button>
                </li>
            </LinkScroll>
            <LinkScroll to="contact" spy={true} smooth={true} offset={0} duration={500}>
                <li>
                    <button className="navigationBar__Link--button">Contact</button>
                </li>
            </LinkScroll>

            <LinkRouter className="navigationBar__Link" to="/login">
                <li>
                    <button className="navigationBar__Link--button navigationBar--login">Inloggen</button>
                </li>
            </LinkRouter>
        </div>
    )
}

export default Navbar;