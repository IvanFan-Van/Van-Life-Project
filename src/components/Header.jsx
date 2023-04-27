import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <h2 className="nav--logo"><Link to="/">#VANFLIFE</Link></h2>
            <ul className="nav--tags">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Vans">Vans</Link></li>
            </ul>
        </nav>
    )
}