import '../../sass/components/nav.css';
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../services/firebase/firebase"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {

    if(!category) {
      setLoading(true)
      getDocs(collection(db, "items")).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
      }).catch((error) => {
        console.log("Can't find items", error)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(true)
      getDocs(query(collection(db,"items"), where("category", "==", category), limit(10))).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
      }).catch((error) => {
        console.log("Can't find items", error)
      }).finally(() => {
        setLoading(false)
      })
    }
 
    return (() => {
      setProducts([])
    })
    
  }, [category])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <ItemList products={products}/>
    </>
  );
}

  export default ItemListContainer