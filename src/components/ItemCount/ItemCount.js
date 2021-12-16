import "../../sass/components/itemDetail.css"


const ItemCount = ({stock, counter, setCounter, item, addCart}) => {

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
        const dataItem = { ...item, quantity: counter };
        addCart(dataItem)
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