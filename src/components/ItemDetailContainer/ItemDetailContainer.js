import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../sass/components/itemDetail.css"
import { getItem } from "../../products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    console.log(item);
    
    useEffect(() => {
        const items = getItem()
        
        items.then(item => {
            setItem(item)
        })

        return(() => {
            setItem([])
        })
    }, [])

    return (
        <div className="ItemDetailContainerParent">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer