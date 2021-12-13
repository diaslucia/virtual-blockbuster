import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../sass/components/itemDetail.css"
import { getProductById } from "../../products";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { paramId } = useParams();
    
    useEffect(() => {

        getProductById(paramId).then(item => {
            setItem(item)
        }).catch(err => {
            console.log(err)
        })

        return(() => {
            setItem([])
        })

    }, [paramId])

    return (
        <div className="ItemDetailContainerParent">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer