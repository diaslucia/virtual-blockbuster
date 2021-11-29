import '../../sass/components/nav.css';
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../products";

const ItemListContainer = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = getProducts()
    list.then(list => {
      setProducts(list)
    })
    
    return (() => {
      setProducts([])
    })

  }, [])

    return (
      <>
        <ItemList products={products}/>
        {children}
      </>
    );
}

  export default ItemListContainer