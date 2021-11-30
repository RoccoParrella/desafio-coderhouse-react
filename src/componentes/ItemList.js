import '../App.css';
import { memo } from 'react';
import Item from './Item';

const ItemList = ({ item }) => {

    return (
        <>
            {
                item.map(item => <Item id={item.id} name={item.name} price={item.price} stock={item.stock} img={item.img} />)
            }
        </>
    );
}

export default memo(ItemList);