import NavBar from './components/NavBar/NavBar.js';
import CartWidget from './components/NavBar/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <>
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer greeting="Welcome to this website!"/>
    </>
  );
}

export default App;
