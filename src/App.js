import NavBar from './components/NavBar/NavBar.js';
import CartWidget from './components/CartWidget/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';
import Checkout from './components/Checkout/Checkout.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContext } from './components/CartContext/CartContext';
import Banner from "./components/Banner/Banner.js";

function App() {
  return (
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
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;

