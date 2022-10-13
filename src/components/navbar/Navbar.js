import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navigationBar">
            <li><img className="logo" src="logo.png" alt="" /></li>
            <li>Over</li>
            <li>Features</li>
            <li>Prijs</li>
            <li>Contact</li>
            <li className="navigationBar--login">Inloggen</li>
        </nav>
    )
}

export default Navbar;