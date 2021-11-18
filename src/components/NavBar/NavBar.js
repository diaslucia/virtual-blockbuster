import Logo from './Logo.gif';
import '../../sass/components/nav.css';

const NavBar = ({children}) => {
    return (
        <div className="NavBarContainer">
            <div className="navBar">
                <ul>
                    <li className="login"><a href="">Log In</a></li>
                    {children}
                </ul>
            </div>
            <nav className="nav">
                <div className="navLogoContainer">
                    <img className="imgLogo" src={Logo} alt="logo"/>
                </div>
                <div className="navMenuContainer">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><div className="line"></div></li>
                        <li><a href="">MOVIES</a></li>
                        <li><div className="line"></div></li>
                        <li><a href="">SERIES</a></li>
                        <li><div className="line"></div></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar