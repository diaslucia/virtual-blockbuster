import "../../sass/components/itemDetail.css"

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
                        <h5>{item.category} - {item.duration}</h5>
                        <p>{item.plot}</p>
                    </div>
                </div>
                <div className="itemDetailTrailer">
                    <iframe width="560" height="315" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="itemDetailButtons">
                <div className="itemDetailBuy">
                    <button>Buy</button>
                </div>
                <div className="itemDetailRent">
                    <button>Rent</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail