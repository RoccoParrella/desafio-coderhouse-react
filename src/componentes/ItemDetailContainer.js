import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsPromise from "../utils/promise";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/Products');

const ItemDetailContainer = () => {
    const [data, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        productsPromise(2000, products.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;