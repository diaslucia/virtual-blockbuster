import '../../sass/components/home.css';
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react"
import { useParams } from "react-router";
import { getProducts } from "../../services/firebase/firebase";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


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


  if(loading) {
    const override = css`
    display: block;
    margin: auto;
    margin-top: 20rem;
    margin-bottom: 20rem;
    `;
    return <ClipLoader size={50} color={"#1C4DA4"} loading={loading} css={override}/>
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
      {(() => {
          if (category === undefined) {
          return <button onClick={() => setAmountProd(amountProd + 14)} className="seeMore">Show More</button>
          }
      })()}
    </>
  );
}

  export default ItemListContainer