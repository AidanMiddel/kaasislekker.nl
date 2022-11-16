import { Link } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navigationBar">
                <Link to="/"><li><img className="logo" src="logo.png" alt="" /></li></Link>
                <Link to="/test"><li>Over</li></Link>
                <li>Features</li>
                <li>Prijs</li>
                <li>Contact</li>
                <li className="navigationBar--login">Inloggen</li>
        </div>
    )
}

export default Navbar;