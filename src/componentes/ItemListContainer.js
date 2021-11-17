import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import React from 'react';
import productsPromise from '../utils/promise';
const { products } = require ('../utils/Products')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        productsPromise(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
        <>  
            <ItemList item={datos} />
        </>
    );
}

export default ItemListContainer;