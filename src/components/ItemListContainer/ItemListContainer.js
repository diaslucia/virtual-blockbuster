import '../../sass/components/nav.css';

const ItemListContainer = ({greeting}) => {
    return (
      <div>
        <p className="greeting">{greeting}</p>
      </div>
    );
}

  export default ItemListContainer