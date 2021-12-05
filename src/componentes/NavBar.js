import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">PaellaShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/remera">Remeras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/pantalon">Pantalones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/campera">Camperas</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart"><CartWidget /></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;