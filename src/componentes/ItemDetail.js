import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);

    const onAdd = (qty) => {
        alert(`Usted ha agregado al carrito ${qty} ${item.name}`);
        setCount(qty);
    }

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
                            {
                            count === 0
                            ? <ItemCount stock={item.stock} onAdd={onAdd}/>
                            : <Link to='/cart' style={{textDecoration: "none"}}><button className="buttonBuy">CheckOut</button></Link>
                            }
                            <Link style={{textDecoration: "none"}} className="buttonBuy" to={`/`}>Volver</Link>
                        </div>
                    </div>
                    : <h2>Cargando...</h2>
            }
        </>
    );
}

export default ItemDetail;