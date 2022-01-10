import '../../sass/components/nav.css';
import Logo from "./Logo.gif";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { db } from "../../services/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = ({children}) => {
    const [categories, setCategories] = useState([]);
    const { user, logout } = useContext(UserContext);

    useEffect(() => {
        getDocs(collection(db, 'categories')).then((querySnapshot) => {
        const categories = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
        })
        setCategories(categories)
        })
      },[])

    return (
        <div className="NavBarContainer">
            <div className="navBar">
                <ul>
                    {user === undefined ?
                    <li className="log"><Link to={"/login"}>Log In</Link></li>
                    :
                    <>
                        <p className="welcomeSign">Welcome, {user.username}!</p>
                        <li className="log" onClick={()=> logout()}>Log Out</li>
                    </>
                    }
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
                        <div className="categories">
                            {categories.map(categ =>
                            <div className="categoriesMap" key={categ.id}>
                                <Link className="categoryOption" to={`/category/${categ.id}`}>{categ.description}</Link>
                                <li><div className="line"></div></li>
                            </div>
                            )}
                        </div>
                        <li>FAQ</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar