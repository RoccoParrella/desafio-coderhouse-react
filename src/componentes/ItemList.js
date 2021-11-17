import '../App.css';
import Item from './Item';

const ItemList = ({ item }) => {

    console.log(item);
    
        return (
            <>
            { 
                item.length > 0 
                ? item.map(item => <Item id={item.id} name={item.name} price={item.price} stock={item.stock} />)
                : <h1>Cargando...</h1>
            }
            </>
        );
    }

export default ItemList;