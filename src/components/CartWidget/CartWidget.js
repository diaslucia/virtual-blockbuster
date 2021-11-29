import '../../sass/components/nav.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    return (
        <>
        <li className="cartIcon"><ShoppingCartOutlined /></li>
        <li className="cartNumber">0</li>
        </>
    )
}

export default CartWidget