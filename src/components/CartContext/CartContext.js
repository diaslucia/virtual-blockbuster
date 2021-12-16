import React, { useState } from "react"

const Context = React.createContext()

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const addCart = (item) => {
        if(!checkDuplicate(item.id)){
            setCart([...cart, item]);
            
        } else {
            let prod = cart.find(product => product.id === item.id);
            prod.quantity = item.quantity + prod.quantity;
            if(prod.quantity <= prod.stock){
                setCart([...cart]);
                console.log(cart)
            } else {
                console.log("no hay suficiente stock")
            }
        }
    }

    const checkDuplicate = (id) => {
        const duplicate = cart.find((product) => product.id === id);
        return duplicate === undefined ? false : true;
    }

    const removeItem = (id) => {
        const removingItem = cart.filter((product) => product.id !== id);
        setCart(removingItem);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return(
        <Context.Provider value={{
                                    cart,
                                    addCart,
                                    removeItem,
                                    deleteCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context