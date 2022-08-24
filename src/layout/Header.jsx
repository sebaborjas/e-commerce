import "./Main.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light main-color">
      <div className="container">
        <a className="navbar-brand" href="/">
          E-Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navbarLinks"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/card">
                Carrito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
