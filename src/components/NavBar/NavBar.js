import Logo from './Logo.gif';
import '../../sass/components/nav.css';

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
                    <img className="imgLogo" src={Logo} alt="logo"/>
                </div>
                <div className="navMenuContainer">
                    <ul>
                        <li>HOME</li>
                        <li><div className="line"></div></li>
                        <li>MOVIES</li>
                        <li><div className="line"></div></li>
                        <li>SERIES</li>
                        <li><div className="line"></div></li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar