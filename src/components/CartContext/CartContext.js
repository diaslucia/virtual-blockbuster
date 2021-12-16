import React, { useState } from "react"

const Context = React.createContext()

export const CartContext = ({children}) => {
    const [productCart, setProductCart] = useState({})
   

    const addCart = (item) => {
        setProductCart(item)
        console.log(productCart);
    }

    return(
        <Context.Provider value={productCart, addCart}>
            {children}
        </Context.Provider>
    )
}

export default Context