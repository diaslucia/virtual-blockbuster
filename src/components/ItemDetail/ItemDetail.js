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
                        <div className="itemDetailButtons" style={{justifyContent: false ? "flex-start" : "center"}}>
                            <div className="itemDetailBuy">
                                <ItemCount stock={item.stock} item={item} price={item.price}/>
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