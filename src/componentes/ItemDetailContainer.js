import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsPromise from "../utils/promise";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/Products');

const ItemDetailContainer = () => {
    const [data, setDato] = useState({});
    const { id } = useParams();
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        setLoader(true);
        productsPromise(500, products.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [id]);
    
    return loader ? (
        <div className="loading">
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-secondary" role="status">
                </div>
            </div>
            <h1 className="textLoading">Loading...</h1>
        </div >
        
    ) : (<ItemDetail item={data} />);
}

export default ItemDetailContainer;