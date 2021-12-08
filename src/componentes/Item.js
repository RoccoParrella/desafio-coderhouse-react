import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
    return (
        <Link to={`/item/${id}`}>
        <div className="card-main">
            <img className="img-card" src={img} alt=" "></img>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            
        </div>
        </Link>
    );
}

export default Item;