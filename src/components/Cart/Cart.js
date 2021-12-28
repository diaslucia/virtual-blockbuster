import "../../sass/components/cart.css"
import CartItems from "../CartItems/CartItems"
import { useContext, useEffect } from "react";
import Context from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { totalPrice, deleteCart, cart } = useContext(Context);
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
                    <div>
                        <p>Your total is: ${total}</p>
                    </div>
                    <div>
                        <button className="emptyCartButton" onClick={emptyCart}>Empty Cart</button>
                        <Link to="/checkout" className="checkoutButton">Begin Checkout</Link>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Cart