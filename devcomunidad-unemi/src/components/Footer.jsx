export default function Footer() {
  return (
    <footer className="app-footer text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="fw-semibold">&lt;/&gt; DevComunidad UNEMI</span>
        <small className="opacity-75">
          Universidad Estatal de Milagro · Desarrollo Web · Práctica 2 · {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}
