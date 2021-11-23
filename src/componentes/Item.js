import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, stock, img }) => {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <img className="card-img" src={img}></img>
            <p className="card-text">${price}</p>
            <p className="card-text">Stock: {stock}</p>
            <Link className="buttonBuy" style={{textDecoration: "none"}} to={`/item/${id}`}>Info</Link>
        </div>
    </div>
    );
}

export default Item;