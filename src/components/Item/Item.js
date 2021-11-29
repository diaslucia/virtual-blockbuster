import "../../sass/components/item.css"

const Item = ({product}) => {
    return (
        <div className="itemCard">
            <img className="itemCardImg" src={product.img}/>
            <h1 className="itemCardName">{product.name}</h1>
            <p className="itemCardPrice">${product.price}</p>
        </div>
    )
}

export default Item