export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          &lt;/&gt; DevComunidad <span className="brand-accent">UNEMI</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-light btn-sm fw-semibold px-3" href="#registro">
                Unirme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
