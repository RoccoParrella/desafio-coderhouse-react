import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, stock }) => {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <p className="card-text">Stock: {stock}</p>
            <ItemCount max={stock} />
            <Link className="buttonBuy" style={{textDecoration: "none"}} to={`/item/${id}`}>Info</Link>
        </div>
    </div>
    );
}

export default Item;