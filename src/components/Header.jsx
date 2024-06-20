import "./Header.css";
import {Link} from "react-router-dom"

function Header(){
    return (
        <nav className="globalNav">
            <Link to="/">
                <h1 className="Logo">Shine Weer</h1>
            </Link>
                <ul>
                    <Link to="/AddProduct">
                        <li className="AddCreation">
                        +
                        </li>
                    </Link>
                </ul>
        </nav>
    )
}

export default Header; 