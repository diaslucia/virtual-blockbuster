import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../sass/components/itemDetail.css";
import { useParams } from "react-router";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const { paramId } = useParams();
    
    useEffect(() => {
        
        setLoading(true)
        getDoc(doc(db, "items", paramId)).then((querySnapshot) => {
            const item = {id: querySnapshot.id, ...querySnapshot.data()}
            setItem(item)
        }).catch((error) => {
            console.log("Can't find item", error)
        }).finally(() => {
            setLoading(false)
        })

        return(() => {
            setItem([])
        })

    }, [paramId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="ItemDetailContainerParent">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer


