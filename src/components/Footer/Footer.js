import '../../sass/components/footer.css';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <img className="logoFooter" src="/logoFooter.png" alt="logo"></img>
                </div>
                <div className="footerNav">
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
                <div className="footerAboutUs">
                    <h1>About Us</h1>
                    <p>Our Story</p>
                    <p>Affiliates</p>
                    <p>Investors</p>
                </div>
                <div className="footerHelp">
                    <h1>Get Help</h1>
                    <p>Contact Us</p>
                    <p>Frequently Asked Questions</p>
                    <p>Store Feedback</p>
                </div>
                <div className="footerConnect">
                    <h1>Connect with Us</h1>
                    <div className="icons">
                        <InstagramOutlined className="iconConnect"/>
                        <FacebookOutlined className="iconConnect iconConnectMiddle"/>
                        <YoutubeOutlined className="iconConnect"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer