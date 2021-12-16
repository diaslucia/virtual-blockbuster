import NavBar from './components/NavBar/NavBar.js';
import CartWidget from './components/CartWidget/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContext } from './components/CartContext/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>
        <Switch>
        <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer/>
          </Route>
          <Route path="/detail/:paramId">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;

