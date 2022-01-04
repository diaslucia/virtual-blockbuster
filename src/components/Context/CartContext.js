import React, { useState } from "react"

const Context = React.createContext()

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const addCart = (item) => {
        if(!checkDuplicate(item.id)){
            setCart([...cart, item]);
        } else if(checkDuplicate(item.id) && item.id.includes("rent")){
            console.log("su producto ya esta en el carrito")
        } else {
            let prod = cart.find(product => product.id === item.id);
            prod.quantity = item.quantity + prod.quantity;
            prod.price = item.price + prod.price;
            if(prod.quantity <= prod.stock){
                setCart([...cart]);
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

    const totalAmount = () => {
        let numberCart = 0;
        cart.map(product => numberCart += product.quantity);
        return numberCart;
    }

    const totalPrice = () => {
        let total = 0;
        cart.map(product => total += product.price);
        return total;
    }

    return(
        <Context.Provider value={{
                                    cart,
                                    addCart,
                                    removeItem,
                                    deleteCart,
                                    totalAmount,
                                    totalPrice}}>
            {children}
        </Context.Provider>
    )
}

export default Context