import "../../sass/components/item.css"
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <>
        <Link className="itemLink" to={`/item/${product.id}`}>
            <div className="itemCard">
                <img className="itemCardImg" src={product.img} alt={product.name}/>
                <h1 className="itemCardName">{product.name}</h1>
                <p className="itemCardPrice">${product.price}</p>
            </div>
        </Link>
        </>
    )
}

export default Item