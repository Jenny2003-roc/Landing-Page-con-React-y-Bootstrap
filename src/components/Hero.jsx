export default function Hero() {
  return (
    <header id="inicio" className="hero d-flex align-items-center text-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge rounded-pill hero-badge mb-3">
              Comunidad de estudiantes de Software
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Aprende, construye y crece junto a otros <span className="brand-accent">desarrolladores</span>
            </h1>
            <p className="lead mb-4">
              DevComunidad UNEMI reúne a estudiantes que quieren mejorar sus
              habilidades en desarrollo web, bases de datos e inteligencia
              artificial mediante talleres, proyectos y mentorías.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#registro" className="btn btn-light btn-lg fw-semibold px-4">
                Crear mi cuenta
              </a>
              <a href="#servicios" className="btn btn-outline-light btn-lg px-4">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row g-3 text-center">
              <div className="col-4">
                <div className="stat-card">
                  <div className="stat-num">+120</div>
                  <div className="stat-label">Miembros</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-card">
                  <div className="stat-num">24</div>
                  <div className="stat-label">Talleres</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-card">
                  <div className="stat-num">15</div>
                  <div className="stat-label">Proyectos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
