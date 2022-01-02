import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../sass/components/itemDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const { paramId } = useParams();
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, "items", paramId)).then((querySnapshot) => {
            const item = {id: querySnapshot.id, ...querySnapshot.data()}    
            setItem(item);
        }).catch((error) => {
            console.log("Can't find item", error)
        }).finally(() => {
            setLoading(false)
        })

        return(() => {
            setItem([])
        })

    }, [paramId])

    const override = css`
    display: block;
    margin: auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
    `;

    if(loading) {
        return <ClipLoader size={50} color={"#1C4DA4"} loading={loading} css={override}/>
    }

    return (
        <div className="ItemDetailContainerParent">
            {item.name === undefined ?
            <div className="findProduct">
                <h1> Sorry, we couldn't find that product!</h1>
                <p><Link to="/">Go Back Shopping</Link></p>
            </div>
            :
            <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer


