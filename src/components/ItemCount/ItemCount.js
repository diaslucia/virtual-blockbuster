import "../../sass/components/itemDetail.css";
import { useContext, useState } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({stock, item, price}) => {
    const [condition, setCondition] = useState(false);
    const [counter, setCounter] = useState(0);
    const [priceItem, setPriceItem] = useState(0);
    const { addCart } = useContext(Context);
    
   
    const onAdd = () => {
        if (counter < stock){
            setCounter(counter + 1);
            setPriceItem(priceItem + price)
        }
    }

    const onSubtract = () => {
        if(counter >= 1){
            setCounter(counter - 1);
            setPriceItem(priceItem - price)
        }
    }
   
    const buyButton = () => {
        if(counter > 0){
        const dataItem = { ...item, quantity: counter, price: priceItem };
        addCart(dataItem)
        setCondition(!condition);
        }
    }

    return (
        <>
        {condition === false ?
            <div className="itemCountContainer">
                <div className="itemCountPrice">
                    <p className="buyPrice">${priceItem}</p>
                </div>
                <div className="itemCounter">
                    <button className="buttonSubtract" onClick={onSubtract}>-</button>
                    <p className="itemCounter">{counter}</p>
                    <button className="buttonAdd" onClick={onAdd}>+</button>
                </div>
                <div className="itemCounterBuy">
                    <button className="buyButton" onClick={buyButton}>Buy</button>
                </div>
            </div>
            :
            <Link to="/cart" className="goToCart">Go to cart</Link>}
        </>
        
    )
}

export default ItemCount