import "../../sass/components/checkout.css"
import Context from "../Context/CartContext";
import UserContext from "../Context/UserContext";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase/firebase";
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const Checkout = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [orderDone, setOrderDone] = useState(false);
    const [idOrder, setIdOrder] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userEmailAgain, setUserEmailAgain] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const { totalPrice, cart, deleteCart } = useContext(Context);
    const { user } = useContext(UserContext);

    useEffect(() => {
        return cart
    }, [cart])

    const changeOrderDone = () => {
        setOrderDone(false)
    }

    const confirmOrder = () => {
        if(userEmail === userEmailAgain) {
            setProcessingOrder(true);
        
            const objOrder = {
                name: userName,
                email: userEmail,
                phone: userNumber,
                date: Timestamp.fromDate(new Date()),
                items: cart,
                total: totalPrice()
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            
            objOrder.items.forEach((prod) => {
                getDoc(doc(db, "items", prod.id)).then((documentSnapshot) => {
                    if(documentSnapshot.data().stock >= prod.quantity) {
                        batch.update(doc(db, "items", documentSnapshot.id), {
                            stock: documentSnapshot.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
                    }
                })
            })
    
            if(outOfStock.length === 0) {
                addDoc(collection(db, "orders"), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        setIdOrder(id)
                        setOrderDone(true)
                    })
                }).catch((error) => {
                    console.log(`Eror: ${error}`)
                }).finally(() => {
                    setProcessingOrder(false);
                    setCheckEmail(false);
                    deleteCart()
                })
            }
        } else {
            setCheckEmail(true);
        }
    }

    if(processingOrder) {
        return <h1>Your order is being processed</h1>
    }

    return(
        <>
        {orderDone === false ?
            <div className="checkoutContainer">
                <div className="titleContainer">
                    <p>To proceed with the checkout<br></br>fill in the form</p>
                    { checkEmail === true ?
                    <p className="checkEmail">Sorry, we were unable to match the email address entered.<br></br> Please, check your entries and try again.</p>
                    :
                    <></>
                    }
                </div>
                <div className="formContainer">
                    <form>
                        <label>
                            Full Name:
                            <input type="text" id="name" name="name" value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
                        </label>
                        <label>
                            Email:
                            {user === undefined ?
                            <input type="email" id="email" name="email" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}></input>
                            :
                            <input type="email" id="email" name="email" value={user.email} onChange={(e)=> setUserEmail(e.target.value)}></input>
                            }
                        </label>
                        <label>
                            Type Email Again:
                            {user === undefined ?
                            <input type="email" id="email2" name="email2" value={userEmailAgain} onChange={(e)=> setUserEmailAgain(e.target.value)}></input>
                            :
                            <input type="email" id="email2" name="email2" value={user.email} onChange={(e)=> setUserEmailAgain(e.target.value)}></input>
                            }
                            
                        </label>
                        <label>
                            Phone Number:
                            <input type="tel" id="number" name="number" value={userNumber} onChange={(e)=> setUserNumber(e.target.value)}></input>
                        </label>
                    </form>
                </div>
                <div className="buyContainer">
                    <button className="confirmButton" onClick={confirmOrder}>Confirm Order</button>
                </div>
            </div>
        :
            <div className="thankYou">
                <p>Your confirmation code is:</p>
                <h1>{idOrder}</h1>
                <Link to="/" className="doneOrder" onClick={changeOrderDone}>Go back shopping</Link>
            </div>
            }
        </>
    )
}

export default Checkout