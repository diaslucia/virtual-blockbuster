import "../../sass/components/cart.css";
import Context from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { DeleteOutlined } from '@ant-design/icons';

const CartItems = ({product}) => {
    const [color, setColor] = useState("cartItemContainer");
    const { removeItem } = useContext(Context);

    const removeProduct = () => {
        removeItem(product.id);
    }

    useEffect(() => {
        if(product.id.includes("rent")){
            setColor("cartItemContainerYellow");
        }
    }, [product.id])
    
    
    return (
        <div className={color}>
            <div className="cartImgContainer">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="cartItemDetails">
                <h1>{product.name}</h1>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
            </div>
            <div>
                <span className="removeItem" onClick={removeProduct}><DeleteOutlined/></span>
            </div>
        </div>
)
}
export default CartItems