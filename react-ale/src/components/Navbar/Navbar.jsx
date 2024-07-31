import "./Navbar.css"


const Navbar = () => {
    return (
        <>
        <div className="Nav">
        <p className="Logo">Logo</p>
        <h1>PsFlixGame</h1>
        <ul>
            <li>
                <a href="">Deporte</a>
            </li>
            <li>
            <a href="">Exclusivos</a>
            </li>
            <li>
            <a href="">Shooter</a>
            </li>
        </ul>
        </div>
        </>

    )
}

export default Navbar;