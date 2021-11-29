import Item from "../Item/Item";
import "../../sass/components/item.css"

const ItemList = ({products}) => {
    return (
        <div className="itemCardContainer">
            {products.map(product =><Item key={product.id} product={product}/>)}
        </div>
    )
}

export default ItemList