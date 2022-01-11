import '../../sass/components/home.css';
import ItemList from "../ItemList/ItemList";
import LoadingSpinner from '../Loading/Loading';
import {useState, useEffect} from "react"
import { useParams } from "react-router";
import { getProducts } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [amountProd, setAmountProd] = useState(14);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true)
        getProducts("category", "==", category, amountProd).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

      return (() => {
        setProducts([])
      })
  }, [category, amountProd])

  return (
    <LoadingSpinner loading={loading}>
      {(() => {
        if (category === "movies") {
          return <img className="banner2" src="/assets/movies.jpg" alt="banner"></img>
        } else if (category === "series") {
          return <img className="banner2" src="/assets/series.jpg" alt="banner"></img>
        } else {
          return <></>
        }
      })()}
      <ItemList products={products}/>
      {(() => {
          if (category === undefined) {
          return <button onClick={() => setAmountProd(amountProd + 14)} className="seeMore">Show More</button>
          }
      })()}
    </LoadingSpinner>
  );
}

  export default ItemListContainer