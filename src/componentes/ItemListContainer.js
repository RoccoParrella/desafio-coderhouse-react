import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import firestoreFetch from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { category } = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        firestoreFetch(category)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [category]);


    return loader
        ? (
            <div className="loading">
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-secondary" role="status">
                    </div>
                </div>
                <h1 className="textLoading">Loading...</h1>
            </div >
        ) : (<ItemList item={datos} />);

}

export default ItemListContainer;