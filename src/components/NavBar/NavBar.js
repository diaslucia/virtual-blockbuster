import Logo from './Logo.gif';
import '../../sass/components/nav.css';
import { Link } from "react-router-dom";

const NavBar = ({children}) => {
    return (
        <div className="NavBarContainer">
            <div className="navBar">
                <ul>
                    <li className="login">Log In</li>
                    {children}
                </ul>
            </div>
            <nav className="nav">
                <div className="navLogoContainer">
                    <Link to={"/"}><img className="imgLogo" src={Logo} alt="logo"/></Link>
                </div>
                <div className="navMenuContainer">
                    <ul>
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><div className="line"></div></li>
                        <li><Link to={"/category/movies"}>MOVIES</Link></li>
                        <li><div className="line"></div></li>
                        <li><Link to={"/category/series"}>SERIES</Link></li>
                        <li><div className="line"></div></li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar