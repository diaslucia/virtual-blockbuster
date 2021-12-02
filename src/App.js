import NavBar from './components/NavBar/NavBar.js';
import CartWidget from './components/CartWidget/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemCount from "./components/ItemCount/ItemCount.js";


function App() {
  return (
    <>
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer>
        <ItemCount stock={5} initial={1}/>
      </ItemListContainer>
      <ItemDetailContainer/>
    </>
  );
}

export default App;

