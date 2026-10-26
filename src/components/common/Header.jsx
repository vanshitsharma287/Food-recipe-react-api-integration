import logo from "/images/logo.png";
import { Link } from "react-router";

const Header = (props) => {
    return (
         <header>
            <nav>
                <img src={logo} alt="logo" className="logo" />

             <ul className="nav-links">
                <li><Link to="/" className={props?.active == "home" ? "active" : ""}>Home</Link></li>
                <li><Link to="/saved" className={props?.active == "saved" ? "active" : ""}>Saved</Link></li>
                <li><Link to="/about" className={props?.active == "about" ? "active" : ""}>About</Link></li>
            </ul>

            <div className="nav-btn">
            <button>Login</button>
            <button>Signup</button>
            </div>
            </nav>
        </header>
    )
}
export default Header;