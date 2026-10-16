# DevComunidad UNEMI — Landing Page con React + Bootstrap

Práctica 2 de **Desarrollo Web** (Unidad 2: Frameworks de desarrollo de aplicaciones web y móviles) — Universidad Estatal de Milagro (UNEMI).

## Descripción

Landing page para una comunidad de estudiantes de Software que incluye un formulario de registro validado (el desarrollado en la Guía Práctica N.º 1, ahora migrado a React). La interfaz es totalmente responsiva y está organizada en componentes funcionales.

## Tecnologías utilizadas

- React 18 (componentes funcionales, JSX, hooks)
- Bootstrap 5 (grid, navbar, cards, formularios, utilidades)
- Vite (entorno de desarrollo y build)
- CSS personalizado para el tema (tonos teal)

## Funcionalidades implementadas

- Estructura por componentes: `Navbar`, `Hero`, `Servicios`, `Formulario`, `Footer`
- Navbar responsiva con menú colapsable (Bootstrap JS)
- Sección de servicios con tarjetas generadas desde un arreglo (`map`)
- Formulario controlado con `useState` (valores, errores, campos tocados, éxito, ver contraseña)
- Eventos `onChange`, `onBlur` y `onSubmit`
- Validaciones: nombre (solo letras, mín. 3), correo, contraseña (mín. 8 con letras y números), edad (16–99), teléfono (10 dígitos, inicia con 09), país y aceptación de términos
- Mensajes dinámicos de error (por campo y general) y de éxito
- Diseño responsivo para móvil, tablet y escritorio

## Estructura

```
src/
├── main.jsx
├── App.jsx
├── styles.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Servicios.jsx
    ├── Formulario.jsx
    └── Footer.jsx
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Integrantes

- Jenny Vásquez
- (agregar demás integrantes del grupo)
