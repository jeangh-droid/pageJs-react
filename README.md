# Carpintería J&S

Sitio web corporativo y catálogo digital para **Carpintería J&S**, negocio especializado en la fabricación de muebles y trabajos de carpintería a medida.

El proyecto presenta los servicios, proyectos y trabajos realizados por la carpintería mediante una interfaz moderna, responsiva y orientada a facilitar el contacto con clientes potenciales.

---

## Vista previa

![Vista previa de Carpintería J&S](/src/assets/Carpinteria.gif)

---

## Tabla de Contenidos

- [Carpintería J&S](#carpintería-js)
- [Servicios](#servicios)
- [Proyectos](#proyectos)
- [Identidad Visual y Diseño](#identidad-visual-y-diseño)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución Local](#instalación-y-ejecución-local)
- [Scripts Disponibles](#scripts-disponibles)
- [Funcionalidades Principales](#funcionalidades-principales)
- [Despliegue](#despliegue)

---

## Servicios

La plataforma está enfocada en los servicios de carpintería y fabricación de muebles a medida.

### Carpintería
- Fabricación de muebles a medida.
- Closets y vestidores.
- Reposteros y muebles de cocina.
- Centros de entretenimiento.
- Mobiliario para dormitorios y otros ambientes.
- Trabajos personalizados según las necesidades del cliente.
- Selección de materiales y acabados.
- Instalación y montaje de mobiliario.

---

## Proyectos

Galería de trabajos realizados por Carpintería J&S, organizada para mostrar diferentes tipos de muebles, ambientes y acabados.

---

## Identidad Visual y Diseño

El proyecto utiliza una estética minimalista, elegante y sobria, orientada a transmitir precisión, calidad y trabajo artesanal.

### Estilo Visual
- Diseño limpio y minimalista.
- Geometría predominantemente recta.
- Uso de espacios amplios.
- Contraste entre tonos oscuros y claros.
- Elementos visuales inspirados en madera, mobiliario y arquitectura.

### Paleta de Colores

| Color | Uso |
| :--- | :--- |
| `#0D0D0D` | Fondo principal y secciones destacadas |
| `#161513` | Fondos secundarios y tarjetas |
| `#FAF9F5` | Fondos claros |
| `#A47E4B` | Color de acento relacionado con la madera |
| `#3A2F28` | Texto y elementos complementarios |

---

## Stack Tecnológico

| Herramienta | Descripción |
| :--- | :--- |
| **React** | Biblioteca para la construcción de interfaces |
| **Vite** | Herramienta de desarrollo y compilación |
| **React Router** | Gestión de rutas de la aplicación |
| **Tailwind CSS** | Sistema de estilos basado en utilidades |
| **Framer Motion** | Animaciones y transiciones |
| **Lucide React** | Biblioteca de iconos |
| **TypeScript / JavaScript** | Lenguaje utilizado según los componentes del proyecto |

---

## Estructura del Proyecto

```text
pageJS-react/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── MotionWrapper.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Products.jsx
│   │   └── Services.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml
├── package.json
└── package-lock.json
```

> *Nota: La estructura puede variar dependiendo de la evolución del proyecto.*

---

## Instalación y Ejecución Local

### Prerrequisitos
- **Node.js** v18 o superior.
- **npm** v9 o superior.
- **Git**, en caso de clonar el repositorio.

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <CARPETA_DEL_PROYECTO>
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en la dirección indicada por Vite en la terminal.

### Compilación para Producción
```bash
npm run build
```
Los archivos optimizados para producción se generan en la carpeta `dist/`.

---

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
- `npm run build`: Genera la compilación optimizada para producción.
- `npm run preview`: Permite previsualizar localmente la compilación generada.

---

## Funcionalidades Principales

- **Catálogo de servicios:** presentación de los principales trabajos de carpintería.
- **Portafolio:** galería de proyectos y trabajos realizados.
- **Diseño responsivo:** adaptación a dispositivos móviles, tablets y computadoras.
- **Navegación SPA:** navegación mediante React Router sin recargas completas de página.
- **Animaciones:** transiciones y efectos visuales mediante Framer Motion.
- **Formulario de contacto:** permite a los visitantes solicitar información o cotizaciones.
- **Rutas amigables:** estructura de URLs orientada a facilitar la navegación y el posicionamiento del sitio.
- **SEO básico:** configuración de metadatos para mejorar la presentación del sitio en buscadores y redes sociales.

---

## Despliegue

El proyecto puede ser compilado como una aplicación estática y desplegado en servicios compatibles con aplicaciones React/Vite.

Para despliegues en **Netlify** utilizando React Router, es necesario configurar un fallback hacia `index.html` para evitar errores 404 al actualizar directamente una ruta interna.

Ejemplo de `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Esta configuración permite que rutas como:
- `/carpinteria`
- `/proyectos`
- `/contacto`

continúen funcionando correctamente al acceder directamente o actualizar la página.
