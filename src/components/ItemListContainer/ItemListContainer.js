import '../../sass/components/home.css';
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react"
import { useParams } from "react-router";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [amountProd, setAmountProd] = useState(14);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {

    if(!category) {
      setLoading(true)
      getDocs(query(collection(db, "items"), limit(amountProd))).then((querySnapshot) => {
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
      getDocs(query(collection(db,"items"), where("category", "==", category))).then((querySnapshot) => {
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
    
  }, [category, amountProd])


  if(loading) {
    const override = css`
    display: block;
    margin: auto;
    margin-top: 20rem;
    margin-bottom: 20rem;
    `;
    return <ClipLoader size={50} color={"#1C4DA4"} loading={loading} css={override}/>
  }

  const seeMore = () => {
    setAmountProd(amountProd + 14);
  }

  return (
    <>
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
      {category === undefined ?
        <button onClick={seeMore} className="seeMore">See More</button>
        :
        <></>
      }
    </>
  );
}

  export default ItemListContainer