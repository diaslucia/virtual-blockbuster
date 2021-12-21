import "../../sass/components/cart.css"
import CartItems from "../CartItems/CartItems"
import { useContext, useEffect } from "react";
import Context from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart } = useContext(Context);
    const { totalPrice } = useContext(Context);
    const { deleteCart } = useContext(Context);
    const total = totalPrice();

    useEffect(() => {
        return cart
    }, [cart])
    
    const emptyCart = () => {
        deleteCart();
    }
   

    return (
        <>
        { cart.length === 0 ?
            <div className="emptyCart">
                <h1> Your Cart is empty!</h1>
                <p><Link to="/">Go Shop</Link></p>
            </div>
            :
            <div className="cart">
                <div>
                    {cart.map(product =><CartItems key={product.id} product={product}/>)}
                </div>
                <div className="cartTotal">
                    <p>Total: ${total}</p>
                    <button className="emptyCartButton" onClick={emptyCart}>Empty Cart</button>
                    <button className="checkoutButton">Checkout</button>
                </div>
            </div>
        }
        </>
    )
}

export default Cart