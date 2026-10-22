import logo from "/images/logo.png";

const Header = () => {
    return (
         <header>
            <nav>
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Saved</a></li>
            <li><a href="#contact">About</a></li>
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