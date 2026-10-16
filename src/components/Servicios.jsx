const servicios = [
  {
    icono: "🌐",
    titulo: "Talleres de desarrollo web",
    texto: "Sesiones prácticas de HTML, CSS, JavaScript, React y Bootstrap para crear sitios modernos y responsivos.",
  },
  {
    icono: "🤝",
    titulo: "Mentorías",
    texto: "Acompañamiento de estudiantes avanzados y docentes para resolver dudas y mejorar tus proyectos.",
  },
  {
    icono: "🚀",
    titulo: "Proyectos colaborativos",
    texto: "Trabaja en equipo con control de versiones en GitHub y construye un portafolio real.",
  },
  {
    icono: "🏆",
    titulo: "Retos y hackathons",
    texto: "Participa en competencias internas para aplicar lo aprendido y ganar experiencia.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-5 section-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <p className="eyebrow">LO QUE OFRECEMOS</p>
          <h2 className="fw-bold">Servicios para la comunidad</h2>
          <p className="text-muted">Todo lo que necesitas para avanzar en tu carrera tecnológica.</p>
        </div>
        <div className="row g-4">
          {servicios.map((s) => (
            <div className="col-12 col-md-6 col-lg-3" key={s.titulo}>
              <div className="card h-100 border-0 shadow-sm servicio-card">
                <div className="card-body p-4">
                  <div className="servicio-icono mb-3">{s.icono}</div>
                  <h5 className="card-title fw-bold">{s.titulo}</h5>
                  <p className="card-text text-muted mb-0">{s.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
