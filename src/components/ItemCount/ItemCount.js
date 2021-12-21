import "../../sass/components/itemDetail.css"
import { useState, useEffect } from "react";


const ItemCount = ({stock, counter, setCounter, item, addCart, condition, setCondition, price}) => {
    const [priceItem, setPriceItem] = useState(0);

    useEffect(() => {
        setPriceItem(price);
    }, [price])

    const onAdd = () => {
        if (counter < stock){
            setCounter(counter + 1);
            setPriceItem(priceItem + price)
        }
    }

    const onSubtract = () => {
        if(counter > 1){
            setCounter(counter - 1);
            setPriceItem(priceItem - price)
        }
    }
   
    const buyButton = () => {
        const dataItem = { ...item, quantity: counter, price: priceItem };
        addCart(dataItem)
        setCondition(!condition);
    }

    return (
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
    )
}

export default ItemCount