import '../../sass/components/nav.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useContext} from "react";
import Context from "../CartContext/CartContext";

const CartWidget = () => {

    const { totalAmount } = useContext(Context);
    const number = totalAmount();

    return (
        <>
        <li className="cartIcon"><Link to={"/cart"}><ShoppingCartOutlined /></Link></li>
        { number === 0 ?
        <li className="cartNumberEmpty"></li>
        :
        <li className="cartNumber"><Link to={"/cart"}>{number}</Link></li>
        }
        
        </>
    )
}

export default CartWidget