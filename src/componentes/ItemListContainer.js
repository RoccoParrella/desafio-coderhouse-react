import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import React from 'react';
import productsPromise from '../utils/promise';
const { products } = require ('../utils/Products')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        productsPromise(2000, products.filter(item => {
            if (category === undefined) return item;
            return item.category === parseInt(category)
        }))
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