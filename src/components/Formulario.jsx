import { useState } from "react";

const PAISES = ["Ecuador", "Colombia", "Perú", "México", "Argentina", "Chile", "España", "Otro"];

const valoresIniciales = {
  nombre: "",
  correo: "",
  password: "",
  edad: "",
  telefono: "",
  pais: "",
  terminos: false,
};

// Validaciones (mismas reglas de la Guía 1, mejoradas)
function validarCampo(nombre, valor) {
  switch (nombre) {
    case "nombre":
      if (!valor.trim()) return "El nombre completo es obligatorio.";
      if (valor.trim().length < 3) return "Debe tener al menos 3 caracteres.";
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor.trim()))
        return "Solo se permiten letras y espacios.";
      return "";
    case "correo":
      if (!valor.trim()) return "El correo electrónico es obligatorio.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor.trim()))
        return "Ingresa un correo válido (nombre@ejemplo.com).";
      return "";
    case "password":
      if (!valor) return "La contraseña es obligatoria.";
      if (valor.length < 8) return "Usa al menos 8 caracteres.";
      if (!/[A-Za-z]/.test(valor) || !/\d/.test(valor))
        return "Debe incluir letras y números.";
      return "";
    case "edad": {
      if (valor === "") return "La edad es obligatoria.";
      const n = Number(valor);
      if (!Number.isInteger(n)) return "Ingresa un número entero.";
      if (n < 16 || n > 99) return "La edad debe estar entre 16 y 99 años.";
      return "";
    }
    case "telefono":
      if (!valor.trim()) return "El teléfono es obligatorio.";
      if (!/^09\d{8}$/.test(valor.trim()))
        return "Debe tener 10 dígitos y empezar con 09.";
      return "";
    case "pais":
      return valor ? "" : "Selecciona tu país o región.";
    case "terminos":
      return valor ? "" : "Debes aceptar los términos y condiciones.";
    default:
      return "";
  }
}

export default function Formulario() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [tocados, setTocados] = useState({});
  const [verPassword, setVerPassword] = useState(false);
  const [exito, setExito] = useState(false);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    const nuevo = type === "checkbox" ? checked : value;
    setValores((prev) => ({ ...prev, [name]: nuevo }));
    setExito(false);
    if (tocados[name]) {
      setErrores((prev) => ({ ...prev, [name]: validarCampo(name, nuevo) }));
    }
  };

  const manejarBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const v = type === "checkbox" ? checked : value;
    setTocados((prev) => ({ ...prev, [name]: true }));
    setErrores((prev) => ({ ...prev, [name]: validarCampo(name, v) }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = {};
    const nuevosTocados = {};
    Object.keys(valoresIniciales).forEach((campo) => {
      nuevosTocados[campo] = true;
      nuevosErrores[campo] = validarCampo(campo, valores[campo]);
    });
    setTocados(nuevosTocados);
    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some(Boolean);
    if (!hayErrores) {
      setExito(true);
      setValores(valoresIniciales);
      setTocados({});
      setErrores({});
    } else {
      setExito(false);
    }
  };

  const clase = (campo) => {
    if (!tocados[campo]) return "form-control";
    return `form-control ${errores[campo] ? "is-invalid" : "is-valid"}`;
  };

  const claseSelect = (campo) => {
    if (!tocados[campo]) return "form-select";
    return `form-select ${errores[campo] ? "is-invalid" : "is-valid"}`;
  };

  return (
    <section id="registro" className="py-5 section-form">
      <div className="container py-4">
        <div className="card border-0 shadow-lg form-card overflow-hidden">
          <div className="row g-0">
            {/* Panel de bienvenida */}
            <div className="col-lg-5 welcome-panel text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-3">¡Bienvenido!</h2>
              <p className="mb-4">
                ¿Ya tienes una cuenta? Inicia sesión y continúa donde lo dejaste.
              </p>
              <div>
                <button type="button" className="btn btn-outline-light px-4">
                  Iniciar sesión
                </button>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-7 p-4 p-lg-5 bg-white">
              <p className="eyebrow mb-1">EMPIEZA ALGO NUEVO</p>
              <h3 className="fw-bold">Crear una cuenta</h3>
              <p className="text-muted mb-4">
                Completa tus datos para unirte a nuestra comunidad.
              </p>

              {exito && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  ✅ ¡Cuenta creada con éxito! Bienvenido a DevComunidad UNEMI.
                </div>
              )}
              {Object.values(errores).some(Boolean) && !exito && (
                <div className="alert alert-danger" role="alert">
                  Revisa los campos marcados en rojo antes de continuar.
                </div>
              )}

              <form onSubmit={manejarEnvio} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label fw-semibold">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className={clase("nombre")}
                      placeholder="Ej. Alex García"
                      value={valores.nombre}
                      onChange={manejarCambio}
                      onBlur={manejarBlur}
                    />
                    <div className="invalid-feedback">{errores.nombre}</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="correo" className="form-label fw-semibold">
                      Correo electrónico *
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      className={clase("correo")}
                      placeholder="nombre@ejemplo.com"
                      value={valores.correo}
                      onChange={manejarCambio}
                      onBlur={manejarBlur}
                    />
                    <div className="invalid-feedback">{errores.correo}</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Contraseña *
                    </label>
                    <div className="input-group has-validation">
                      <input
                        id="password"
                        name="password"
                        type={verPassword ? "text" : "password"}
                        className={clase("password")}
                        placeholder="Mínimo 8 caracteres"
                        value={valores.password}
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-ver"
                        onClick={() => setVerPassword((v) => !v)}
                      >
                        {verPassword ? "Ocultar" : "Ver"}
                      </button>
                      <div className="invalid-feedback">{errores.password}</div>
                    </div>
                    <div className="form-text">Usa al menos 8 caracteres, con letras y números.</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="edad" className="form-label fw-semibold">
                      Edad *
                    </label>
                    <input
                      id="edad"
                      name="edad"
                      type="number"
                      className={clase("edad")}
                      placeholder="Ej. 20"
                      value={valores.edad}
                      onChange={manejarCambio}
                      onBlur={manejarBlur}
                    />
                    <div className="invalid-feedback">{errores.edad}</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label fw-semibold">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className={clase("telefono")}
                      placeholder="0991234567"
                      value={valores.telefono}
                      onChange={manejarCambio}
                      onBlur={manejarBlur}
                    />
                    <div className="invalid-feedback">{errores.telefono}</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="pais" className="form-label fw-semibold">
                      País / región *
                    </label>
                    <select
                      id="pais"
                      name="pais"
                      className={claseSelect("pais")}
                      value={valores.pais}
                      onChange={manejarCambio}
                      onBlur={manejarBlur}
                    >
                      <option value="">Selecciona una opción</option>
                      {PAISES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">{errores.pais}</div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        id="terminos"
                        name="terminos"
                        type="checkbox"
                        className={`form-check-input ${
                          tocados.terminos && errores.terminos ? "is-invalid" : ""
                        }`}
                        checked={valores.terminos}
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                      />
                      <label htmlFor="terminos" className="form-check-label">
                        Acepto los términos y condiciones
                      </label>
                      <div className="invalid-feedback">{errores.terminos}</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-crear w-100 py-2 fw-semibold">
                      Crear cuenta →
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
