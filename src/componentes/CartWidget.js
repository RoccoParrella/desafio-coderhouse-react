import { useContext } from 'react/cjs/react.development';
import { CartContext } from './CartContext';
import '../App.css'


const CartWidget = () => {
    const test = useContext(CartContext);
    return (
        <>
        {
            test.cartList.length > 0 ?
            <p className="widget-count">{test.calculateTotalQty()}</p>
            : null
        }
        <img className="carritoImg"alt="Carrito" src="https://image.flaticon.com/icons/png/512/107/107831.png"/>
        </>
    );
}

export default CartWidget;