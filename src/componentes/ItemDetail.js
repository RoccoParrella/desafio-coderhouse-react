import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    // const onAdd = (qty) => {
    //     alert("You have selected " + qty + " items.");
    // }

    return (
        <>
            {
                item.name
                    ?
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>$ {item.price}</p>
                        <p>Stock Online: {item.stock}</p>
                        <ItemCount max={item.stock} />
                        <Link className="buttonBuy" to={`/`}>Volver</Link>
                    </div>
                    : <h2>Cargando...</h2>
            }
        </>
    );
}

export default ItemDetail;