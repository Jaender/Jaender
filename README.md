# Sitio Web de Marca Personal - Andrés Argumero

Website profesional y portafolio interactivo de marca personal para **Andrés Argumero**, *Applications Architect Expert* y estratega de Datos e IA.

## 🚀 Estructura del Sitio Web

El sitio está desarrollado con una arquitectura multi-página moderna, minimalista y ultra-liviana, sin dependencias pesadas de compilación.

- **[index.html](index.html)**: Página de Inicio (Hero ejecutivo, Bento Grid con métricas de trayectoria, proyectos insignia y propuesta de valor).
- **[sobre-mi.html](sobre-mi.html)**: Perfil ejecutivo, filosofía de datos e IA, competencias del ecosistema cloud y certificaciones oficiales (Microsoft Azure, DS4A, SAP).
- **[proyectos.html](proyectos.html)**: Catálogo interactivo de **76 proyectos** extraídos del inventario histórico oficial, con buscador en tiempo real, filtros por categoría técnica y modal detallado de caso de estudio.
- **[trayectoria.html](trayectoria.html)**: Línea de tiempo profesional interactiva (2011–2026), roles en NTT Data y consultoría previa, formación académica e impresión/descarga de CV.
- **[blog.html](blog.html)**: Artículos técnicos y liderazgo de opinión con vista de lectura inmersiva (Microsoft Fabric, SmartOps con Agentes de IA, ROI de Datos).
- **[contacto.html](contacto.html)**: Formulario interactivo con validación, canales directos (LinkedIn, correo) y solicitud de reunión virtual.

---

## 🎨 Características Técnicas & de Diseño

- **Estética & Paleta de Color**: **Oyster Silk & Warm Silver** (Blanco ostra perla `#FAF9F6`, contrastes en plata cálida satinada `#C8C5BD` y tipografía en carbón profundo `#1A1918`).
- **Modo Claro / Modo Oscuro**: Detección automática de preferencia del sistema y selector persistente (`localStorage`). En modo nocturno se invierte a Carbón Ostra Abisal (`#11100F`) con platino cálido (`#FAF9F6` / `#B8B5AD`).
- **Diseño Responsive & Minimalista**: Optimizado para móviles, tablets y pantallas de escritorio grandes con Tailwind CSS y tipografía *Inter* + *Plus Jakarta Sans*.
- **Cero Dependencias de Compilación**: Listo para abrir localmente en cualquier navegador sin necesidad de Node.js o paquetes npm.
- **Micro-interacciones Fluidas**: Animaciones de contadores numéricos, filtros instantáneos y modales con desenfoque de fondo (*glassmorphism*).

---

## 💻 Cómo Visualizarlo Localmente

Puedes hacer doble clic en `index.html` para abrirlo directamente en tu navegador, o levantar un servidor web local con Python:

```powershell
# Desde esta carpeta:
python -m http.server 8000
```
Luego abre tu navegador en: `http://localhost:8000`

---

## 🌐 Cómo Publicarlo en Internet (Gratis)

### Opción 1: GitHub Pages (Recomendada)
1. Crea un repositorio en GitHub (ejemplo: `andresargumero.github.io`).
2. Sube estos archivos a la rama `main`.
3. En GitHub ve a **Settings > Pages** y activa **Deploy from branch (main / root)**.
4. En 1 minuto tu sitio estará en línea con HTTPS gratuito.

### Opción 2: Vercel / Netlify
1. Conecta tu repositorio de GitHub o arrastra la carpeta completa a [Vercel](https://vercel.com) o [Netlify](https://www.netlify.com).
2. Se desplegará instantáneamente como sitio estático sin requerir comandos de compilación adicionales.
