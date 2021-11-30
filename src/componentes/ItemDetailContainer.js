import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import firestoreFetchId from "../utils/firestoreFetchId";

const ItemDetailContainer = () => {
    const [data, setDato] = useState({});
    const { id } = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        firestoreFetchId(id)
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
        
    ) : (<ItemDetail item={data[0]} />);
}

export default ItemDetailContainer;