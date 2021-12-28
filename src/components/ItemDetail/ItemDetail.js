import "../../sass/components/itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../CartContext/CartContext";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0)
    const [condition, setCondition] = useState(false)

    const { addCart } = useContext(Context);

    const rent = () => {
        const dataItem = { ...item, quantity: counter };
        addCart(dataItem)
        setCondition(!condition);
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
                        <div className="itemDetailButtons" style={{justifyContent: false ? "flex-start" : "center"}}>
                            <div className="itemDetailBuy">
                                {condition === false ?
                                <ItemCount stock={item.stock} counter={counter} setCounter={setCounter} item={item} addCart={addCart} condition={condition} setCondition={setCondition} price={item.price}/>
                                :
                                <Link to="/cart" className="goToCart">Go to cart</Link>}
                                
                            </div>
                            <div className="itemDetailRent">
                                {condition === false ?
                                <>
                                <p className="rentPrice">${item.price}</p>
                                <p className="rentDays">3 days</p>
                                <button className="rentButton" onClick={rent}>Rent</button>
                                </>
                                :
                                <></>
                                }
                                
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