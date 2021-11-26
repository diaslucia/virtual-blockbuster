import {useState} from "react"
import '../../sass/components/itemCount.css';

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const onAdd = () => {
        console.log("sumando");
        if (counter < stock){
            setCounter(counter + 1);
        }
    }

    const onSubtract = () => {
        console.log("restando");
        if(counter > initial){
            setCounter(counter - 1);
        }
    }

    return (
        <div className="itemCount">
            <div className ="itemCountContainer">
                <button className="buttonSubtract" onClick={onSubtract}>-</button>
                <p className="itemCounter">{counter}</p>
                <button className="buttonAdd" onClick={onAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount