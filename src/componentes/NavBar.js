import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from './CardWidget';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">PaellaShop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/10">Remeras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/20">Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/30">Camperas</a>
            </li>
            <li className="nav-item">
              <CardWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;