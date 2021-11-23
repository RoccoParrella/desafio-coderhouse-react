import '../App.css';
import Item from './Item';

const ItemList = ({ item }) => {
    
        return (
            <>
            { 
                item.length > 0 
                ? item.map(item => <Item id={item.id} name={item.name} price={item.price} stock={item.stock} img={item.img}/>)
                : <h1>Cargando...</h1>
            }
            </>
        );
    }

export default ItemList;