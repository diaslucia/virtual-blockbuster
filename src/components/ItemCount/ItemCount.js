import {useState} from "react"
import { useHistory } from "react-router-dom";
import "../../sass/components/itemDetail.css"


const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);
    let history = useHistory();

    const onAdd = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    }

    const onSubtract = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
   
    const buyButton = () => {
    if(counter > 0){
        history.push("/cart");
        }
    }

    return (
        <div className="itemCountContainer">
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