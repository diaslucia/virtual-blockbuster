import '../../sass/components/nav.css';
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../products";
import { getProductByCategory } from "../../products";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {

    if(category === undefined) {
      getProducts().then(list => {
        setProducts(list)
      })
    } else {
      getProductByCategory(category).then(list => {
        setProducts(list)
      })
    }

    return (() => {
      setProducts([])
    })
    
  }, [category])

    return (
      <>
        <ItemList products={products}/>
      </>
    );
}

  export default ItemListContainer