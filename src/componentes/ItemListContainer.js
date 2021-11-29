import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import React from 'react';
import productsPromise from '../utils/promise';
const { products } = require ('../utils/Products')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { category } = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        productsPromise(500, products.filter(item => {
            if (category === undefined) return item;
            return item.category === parseInt(category)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [category]);


    return loader ? (
        <div className="loading">
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-secondary" role="status">
                </div>
            </div>
            <h1 className="textLoading">Loading...</h1>
        </div >
    ) : ( 
    <>
    <ItemList item={datos} /> 
    </>);
    
}

export default ItemListContainer;