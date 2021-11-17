import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    return (
        <>
            {
                item && item.img
                    ?
                    <div className="container d-flex justify-content-center">
                        <div className="text-center">
                            <h1>{item.name}</h1>
                            <img src={item.img} />
                            <h3>{item.description}</h3>
                            <h3>$ {item.price}</h3>
                            <h4>Stock Online: {item.stock}</h4>
                            <ItemCount max={item.stock} />
                            <Link className="buttonBuy" to={`/`}>Volver</Link>
                        </div>
                    </div>
                    : <h2>Cargando...</h2>
            }
        </>
    );
}

export default ItemDetail;