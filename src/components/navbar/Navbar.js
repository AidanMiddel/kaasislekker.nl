import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navigationBar">
            <li><img className="logo" src="logo.png" alt="" /></li>
            <li>Vacatures zoeken</li>
            <li>Bedrijfsreviews</li>
            <li>Salarischeck</li>
            <li>Upload je cv</li>
            <li>Inloggen</li>
            <li>Werkgevers / Plaats vacature</li>
        </nav>
    )
}

export default Navbar;