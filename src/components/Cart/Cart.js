import "../../sass/components/cart.css"
import { useContext } from "react";
import Context from "../CartContext/CartContext";

const Cart = () => {

    const { cart } = useContext(Context);

    return (
        <h1>Cart</h1>
)
}
export default Cart