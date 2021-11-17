import { useState } from "react";
import '../App.css';

const ItemCount = (props) => {

    const [valoraciones, setValoraciones] = useState(1);

    const increment = () => {
        if (valoraciones < props.max) {
            setValoraciones(valoraciones+1);
        }
    }

    const decrement = () => {
        if (valoraciones > 1) {
            setValoraciones(valoraciones-1);
        }
    }

    return (
        <div>
            <div className="divButtons">
            <button className="buttons" onClick={decrement}>-</button>
            {valoraciones}
            <button className="buttons" onClick={increment}>+</button>
            </div>
            <button className="buttonBuy">Comprar</button>
        </div>
    )

}

export default ItemCount;