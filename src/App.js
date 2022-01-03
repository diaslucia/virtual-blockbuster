import NavBar from './components/NavBar/NavBar.js';
import CartWidget from './components/CartWidget/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';
import Checkout from './components/Checkout/Checkout.js';
import Banner from "./components/Banner/Banner.js";
import Login from './components/Login/Login.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContextProvider } from './components/Context/UserContext';
import { CartContext } from './components/Context/CartContext';
/* import UserEvent from '@testing-library/user-event'; */

function App() {
  return (
    <UserContextProvider>
      <CartContext>
        <BrowserRouter>
            <NavBar>
              <CartWidget/>
            </NavBar>
          <Switch>
          <Route exact path="/">
              <Banner/>
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:paramId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContext>
    </UserContextProvider>
  );
}

export default App;

