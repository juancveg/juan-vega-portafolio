# Juan Vega - Portfolio

Portafolio personal de **Juan Carlos Vega Rojano**, estudiante de Ingeniería de
Sistemas, construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.
Tema oscuro, con un fondo de **grafo de red animado** (nodos y conexiones) como
elemento distintivo que refuerza el toque de "redes".

## 🚀 Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## ☁️ Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub (puede ser privado o público).
2. Entra a [vercel.com](https://vercel.com), pulsa **"Add New Project"** e
   importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas
   cambiar ningún ajuste de build. Pulsa **Deploy**.
4. Cada vez que hagas `git push`, Vercel vuelve a desplegar automáticamente.

## 🖼️ Dónde agregar tus imágenes

| Imagen | Ruta | Tamaño recomendado |
|---|---|---|
| Foto de perfil | `public/profile.jpg` | Cuadrada, mínimo 400×400px (se recorta en círculo) |
| Imagen proyecto BuildSafe | `public/projects/buildsafe.jpg` | 1200×675px (16:9) |
| Imagen proyecto TiendaYa | `public/projects/tiendaya.jpg` | 1200×675px (16:9) |
| Imagen proyecto TransporMap | `public/projects/transpormap.jpg` | 1200×675px (16:9) |

Para tu **foto de perfil**: solo coloca el archivo en `public/profile.jpg` con
ese nombre exacto y aparecerá automáticamente en el círculo del Hero — no
necesitas tocar el código.

Para las **imágenes de proyectos**: cada tarjeta en
`components/Projects.tsx` tiene un bloque marcado como placeholder (un
recuadro con un ícono). Reemplázalo por:

```tsx
<img src="/projects/buildsafe.jpg" alt="BuildSafe preview" className="h-full w-full object-cover" />
```

(ajustando el nombre de archivo para cada proyecto).

## 🎨 Prompts para generar imágenes con Gemini (Nano Banana)

Usa estos prompts tal cual (o ajústalos a tu gusto). Todos están pensados
para encajar con la estética **dark mode / network / tech** del portafolio y
con la proporción **16:9 (1200x675px)** que usan las tarjetas de proyectos.

### 1. BuildSafe (seguridad industrial + visión artificial)
```
A sleek dark-mode UI illustration for a construction-site safety dashboard
called "BuildSafe". Show a top-down isometric view of a construction site
with workers wearing hard hats and safety vests, each highlighted by a
glowing cyan bounding box (like AI object detection / computer vision).
Background is deep navy/near-black (#05080f) with a subtle grid and faint
glowing network nodes connected by thin lines. Accent colors: cyan
(#22d3ee) and green (#34d399). Clean, modern, slightly futuristic flat
illustration style, no text or logos. 16:9 aspect ratio, 1200x675px.
```

### 2. TiendaYa (e-commerce local en Barranquilla)
```
A dark-mode flat illustration representing a local e-commerce platform
called "TiendaYa" for small shops in Barranquilla, Colombia. Show a small
storefront/market stall on one side and a smartphone with a shopping cart
and product cards on the other, connected by a glowing dotted line (like a
digital connection / network link). Background is deep near-black (#05080f)
with a faint dot-grid pattern and soft cyan (#22d3ee) and green (#34d399)
glows. Modern, friendly, slightly futuristic flat illustration style, no
text or logos. 16:9 aspect ratio, 1200x675px.
```

### 3. TransporMap (mapa de movilidad urbana en tiempo real)
```
A dark-mode flat illustration of a live city map for an urban mobility app
called "TransporMap". Show a stylized night-time city map with streets,
glowing route lines in cyan (#22d3ee), small pin markers indicating road
hazards, and a few connected network nodes/dots representing real-time
reports being transmitted. Background deep near-black (#05080f) with subtle
grid texture. Accent colors cyan (#22d3ee) and green (#34d399). Clean,
modern, slightly futuristic flat illustration style, no text or logos. 16:9
aspect ratio, 1200x675px.
```

### 4. (Opcional) Imagen para redes sociales / Open Graph
```
A minimalist dark-mode hero banner for a software developer's portfolio
website. Deep near-black background (#05080f) with a network graph of
glowing cyan (#22d3ee) and green (#34d399) nodes connected by thin lines,
denser toward one corner and fading out toward the edges. No text, no
people, abstract and elegant. 1200x630px (Open Graph ratio).
```

## 🧩 Estructura del proyecto

```
app/
  layout.tsx        → fuentes, metadata (título "Juan Vega - Portfolio", favicon)
  page.tsx          → ensambla todas las secciones
  globals.css        → estilos base, textura de puntos, scrollbar
  icon.svg           → favicon (ícono de portafolio)
components/
  NetworkBackground.tsx → fondo animado de grafo de red (elemento distintivo)
  Navbar.tsx
  Hero.tsx           → Perfil
  Capabilities.tsx   → "Toolkit" (Soft Skills / Tech Stack)
  Experience.tsx     → Experiencia + Educación
  Projects.tsx       → BuildSafe, TiendaYa, TransporMap
  Contact.tsx        → Email, WhatsApp, LinkedIn, GitHub
  Footer.tsx
```
