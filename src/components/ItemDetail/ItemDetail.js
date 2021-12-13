import "../../sass/components/itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

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
                                <ItemCount stock={item.stock}/>
                            </div>
                            <div className="itemDetailRent">
                                <button className="rentButton">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="itemDetailTrailer">
                    <iframe width="560" height="315" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail