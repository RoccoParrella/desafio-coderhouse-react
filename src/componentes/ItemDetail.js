import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert(`Usted ha agregado al carrito ${qty} ${item.name}`);
        setCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
            {
                item && item.img
                    ?
                    <>
                        <div className="container d-flex justify-content-around align-items-center detail-main">
                            <div >
                                <img className="img-detail" src={item.img} alt={item.name} />
                            </div>
                            <div className="hola">
                                <p className="detail-p-1">{item.name}</p>
                                <p className="detail-p">{item.description}</p>
                                <p className="detail-p">Stock: {item.stock} Unidades</p>
                                <p className="detail-p">$ {item.price}</p>
                                <div className="d-flex align-items-end">
                                {
                                    count === 0
                                        ? <ItemCount stock={item.stock} onAdd={onAdd} />
                                        : <Link to='/cart' style={{ textDecoration: "none" }}><button className="button-detail">CheckOut</button></Link>
                                }
                                <Link style={{ textDecoration: "none" }} className="button-detail" id="detail" to={`/`}>Seguir comprando</Link>
                                </div>
                            </div>
                        </div>
                    </>
                    : <></>
            }
        </>
    );
}

export default ItemDetail;