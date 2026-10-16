import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Servicios from "./components/Servicios.jsx";
import Formulario from "./components/Formulario.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
