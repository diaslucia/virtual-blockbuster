import {useState} from "react"
import "../../sass/components/itemDetail.css"

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const onAdd = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    }

    const onSubtract = () => {
        if(counter > initial){
            setCounter(counter - 1);
        }
    }

    return (
        <div className ="itemCountContainer">
            <button className="buttonSubtract" onClick={onSubtract}>-</button>
            <p className="itemCounter">{counter}</p>
            <button className="buttonAdd" onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount