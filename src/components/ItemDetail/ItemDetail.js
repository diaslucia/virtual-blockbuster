import "../../sass/components/itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import Context from "../CartContext/CartContext";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0)

    const { addCart } = useContext(Context);

    const rent = () => {
        const dataItem = { ...item, quantity: counter };
        addCart(dataItem)
        console.log(dataItem)
    }

    return(
        <div className="itemDetailContainer">
            <div className="itemDetailInfo">
                <div className="itemDetailDiv">
                    <div className="itemDetailImg">
                        <img src={item.img} alt={item.name}/>
                    </div>
                    <div className="itemDetailText">
                        <h1>{item.name}</h1>
                        <h5>{item.genre} -<br/> {item.duration}</h5>
                        <p>{item.plot}</p>
                        <div className="itemDetailButtons">
                            <div className="itemDetailBuy">
                                <ItemCount stock={item.stock} counter={counter} setCounter={setCounter} item={item} addCart={addCart}/>
                            </div>
                            <div className="itemDetailRent">
                                <button className="rentButton" onClick={rent}>Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="itemDetailTrailer">
                    <iframe width="560" height="315" src={item.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail