import { NavLink } from "react-router-dom"


export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><NavLink to='/' aria-current="page" className={({ isActive }) =>
                        `pagines ${isActive ? "destacar" : ""}`}>Characters</NavLink></li>
                    <li><NavLink to='/male' aria-current="page" className={({ isActive }) =>
                        `pagines ${isActive ? "destacar" : ""}`}>Male</NavLink></li>
                    <li><NavLink to='/female' aria-current="page" className={({ isActive }) =>
                        `pagines ${isActive ? "destacar" : ""}`}>Female</NavLink></li>
                    <li><NavLink to='/aboutus' aria-current="page" className={({ isActive }) =>
                        `pagines ${isActive ? "destacar" : ""}`}>About Us</NavLink></li>
                    <li><NavLink to='/contact' aria-current="page" className={({ isActive }) =>
                        `pagines ${isActive ? "destacar" : ""}`}>Contact Us</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}