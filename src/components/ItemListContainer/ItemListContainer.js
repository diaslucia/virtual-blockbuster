import '../../sass/components/nav.css';
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");
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
      getDocs(query(collection(db,"items"), where("category", "==", category), limit(100))).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
        if(category === "movies"){
          setImg("/movies.jpg");
        } else if (category === "series"){
          setImg("/series.jpg");
        } else{
          setImg("");
        }
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

  const override = css`
    display: block;
    margin: auto;
    margin-top: 20rem;
    margin-bottom: 20rem;
    `;

  if(loading) {
      return <ClipLoader size={50} color={"#1C4DA4"} loading={loading} css={override}/>
  }

  return (
    <>
      {category === undefined ?
        <></>
        :
        <img className="banner2" src={img} alt="banner"></img>
      }
      <ItemList products={products}/>
    </>
  );
}

  export default ItemListContainer