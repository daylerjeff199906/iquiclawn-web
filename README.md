# Iquiclown · sitio web institucional

Sitio de varias páginas para Iquiclown, organización de voluntariado artístico y social de Iquitos, Loreto, Perú.
Construido con **Astro 7**, **React 19** (solo donde hay interacción) y **TypeScript en modo estricto**.

## Requisitos

- Node.js 22 o superior (probado con 22.23)
- npm

## Instalar, ejecutar y compilar

```bash
npm install
```

```bash
npm run dev
```

El sitio queda en <http://localhost:4321>.

```bash
npm run check
```

Comprueba tipos de Astro, TypeScript y React.

```bash
npm run build
```

Ejecuta la comprobación de tipos y genera el sitio estático en `dist/`. `npm run preview` lo sirve localmente.

> Las tipografías (Anton, Figtree y DM Mono) se descargan de Fontsource durante el build y se sirven desde el propio sitio.
> El primer build necesita conexión a internet.

## Variables de entorno (opcionales)

Copia `.env.example` a `.env` y completa solo lo que esté confirmado:

| Variable | Efecto |
| --- | --- |
| `PUBLIC_SITE_URL` | Dominio de producción. Activa canonical, URLs absolutas de Open Graph, `sitemap-index.xml` y la línea `Sitemap` de `robots.txt`. |
| `PUBLIC_CONTACT_ENDPOINT` | Endpoint real del formulario (por ejemplo, uno de Formspree). Sin él, **el formulario no se muestra**. |
| `PUBLIC_CONTACT_EMAIL` | Cambia el correo de contacto sin editar código (por defecto, el confirmado en `src/data/organization.ts`). |

## Estructura

```
src/
  assets/fotos/       Fotografías del archivo de Iquiclown (nombres descriptivos)
  components/
    layout/           Cabecera, pie, SEO, migas de pan
    ui/               Botones, encabezados, tarjetas, galería, estados vacíos, ornamentos
    sections/         Bloques de página (invitación final)
    interactive/      Islas de React: filtro de actividades y formulario de contacto
  content/
    actividades/      Una ficha .md por actividad
    novedades/        Un .md por noticia o comunicado
  data/               Datos centrales: organización, navegación, líneas de trabajo, valores, hitos, equipo
  layouts/            BaseLayout
  lib/                Utilidades de contenido e imágenes
  pages/              Rutas
  styles/             tokens.css (paleta y variables), base.css, layout.css
```

Rutas: `/`, `/nosotros`, `/que-hacemos` (+ 3 detalles), `/actividades` (+ `/[slug]`), `/participa`,
`/novedades` (+ `/[slug]`), `/contacto`, `/privacidad`, `/creditos` y la página 404.

## Cómo añadir una actividad

1. Copia `src/content/actividades/_plantilla.md` con un nombre nuevo, sin guion bajo inicial. El nombre es la URL:
   `taller-ejemplo.md` → `/actividades/taller-ejemplo`.
2. Completa el encabezado (`titulo`, `resumen`, `categoria`) y escribe el texto debajo.
3. Pon `fecha` (AAAA-MM-DD) **solo si está confirmada**; si solo se sabe el año usa `fechaTexto`.
4. Pon `borrador: false` para publicarla.
5. Para fotografías: guarda el archivo autorizado en `src/assets/fotos/`, enlázalo con `imagen:` y escribe `imagenAlt`.
   Las galerías (`galeria`) llevan `alt` y `credito` por imagen.

Categorías: `clown-comunitario`, `clown-hospitalario`, `formacion`, `cultura-comunitaria`
(se editan en `src/data/categorias.ts`).
Los filtros por categoría aparecen solos cuando hay 6 o más actividades (`MIN_ACTIVIDADES_PARA_FILTROS`).

## Cómo añadir una novedad

Igual que una actividad, desde `src/content/novedades/_plantilla.md`. Los campos obligatorios son `titulo`, `resumen`,
`fecha` y `tipo` (`noticia`, `comunicado` o `anuncio`).

Mientras `novedades` no tenga entradas, Astro muestra el aviso «The collection "novedades" does not exist or is empty».
Es esperado y desaparece con la primera novedad publicada.

## Otras ediciones

- **Fotografías:** están en `src/assets/fotos/` con nombres descriptivos. El collage de la portada y la página «Nosotros» se configuran en
  `src/lib/images.ts` (imagen y texto alternativo). Las fotos de cada actividad se enlazan desde su ficha en `src/content/actividades/`.
- **Equipo:** añade integrantes en `src/data/equipo.ts`, solo con nombre, cargo y autorización. Si está vacío, la sección no se muestra.
- **Redes sociales:** añade perfiles verificados en `organization.social` (`src/data/organization.ts`); aparecen en el pie y en Contacto.
- **Hitos de trayectoria:** `src/data/hitos.ts`. **Líneas de trabajo:** `src/data/lineas.ts`.

## Decisiones de contenido

- **Actividades y novedades se mantienen como dos secciones**, pero hoy hay una sola actividad documentada (la referencia
  al Festival de Belén) y ninguna novedad. Se dejaron ambas rutas y colecciones listas, con estados vacíos honestos, para
  que crezcan sin cambiar el código. Si la organización prefiere una única sección editorial, basta con enlazar solo una.
- **Contacto:** canales confirmados por la organización: correo `iquiclown.sonrisas@gmail.com`, teléfono 935 488 627 y
  Facebook (`facebook.com/iquiclown`), definidos en `src/data/organization.ts`. El formulario sigue sin mostrarse: al
  definir `PUBLIC_CONTACT_ENDPOINT` aparece con validación accesible y solo muestra «Mensaje enviado» si el servicio
  responde con éxito.
- **Participa:** no hay convocatoria vigente confirmada; la página lo indica y presenta las áreas en las que se puede
  consultar, sin requisitos ni promesas de admisión.
- **Clown hospitalario:** se presenta como práctica artística y de acompañamiento, con la aclaración de que no es un
  tratamiento clínico. No se menciona ningún hospital.
- **Festival de Belén:** Iquiclown figura como participante; la ficha aclara que no es su fundadora.
- La marca es el nombre «Iquiclown» en tipografía; no se creó un logotipo. El icono de pestaña (`public/favicon.svg`) es
  provisional y debe reemplazarse si existe una identidad oficial.

## Datos pendientes antes de publicar

- [ ] Dominio de producción (`PUBLIC_SITE_URL`).
- [ ] Formulario de contacto: definir `PUBLIC_CONTACT_ENDPOINT` si se desea (hoy se usan correo, teléfono y Facebook).
- [ ] Fechas, lugares y años de las actividades del Festival de Belén, y fuentes públicas citables.
- [ ] Confirmar la autorización de las personas que aparecen en las fotografías actuales (participantes, público y, en las visitas hospitalarias, personas atendidas) y las fechas y lugares de cada actividad.
- [ ] Revisar la foto `clown-hospitalario-pasillo-lector-asistencia.jpg`: muestra un comunicado interno parcialmente legible; conviene recortarla o reemplazarla.
- [ ] Confirmar que Verenice Ramos autoriza y es autora de las tres fotos de la clausura de talleres, y que los participantes (con etiquetas de nombre y certificados visibles) aceptan su publicación.
- [ ] Confirmar autoría de las fotografías del Festival de Belén y las de las visitas hospitalarias (hoy figuran como «Archivo de Iquiclown»).
- [ ] Más fotografías autorizadas para las demás actividades.
- [ ] Logotipo oficial, si existe, y reemplazo del icono provisional.
- [ ] Equipo: nombres, cargos y autorización de publicación.
- [ ] Hitos verificables adicionales de la trayectoria desde 2014.
- [ ] Estado de la convocatoria de voluntariado y condiciones, cuando existan.
- [ ] Calendario de talleres y formación, cuando exista.
- [ ] Revisión legal de la política de privacidad (incluida la normativa peruana de protección de datos personales) y
      confirmación del servicio y del plazo de conservación de los mensajes del formulario.
- [ ] Revisión por la organización de los textos editoriales de «Qué hacemos» y «Nosotros».

## Verificaciones realizadas

- `astro check`: 0 errores, 0 avisos, 0 sugerencias. `astro build`: 14 páginas generadas.
- Las 14 rutas responden (13 con 200 y la 404 personalizada); todos los enlaces internos tienen destino válido; cada página tiene un único `h1`, título y descripción propios.
- Sin desplazamiento horizontal a 360 px en ninguna página.
- Menú móvil: apertura, foco inicial en el primer enlace, atrapa foco con Tab, se cierra con Escape devolviendo el foco al botón.
- Formulario (probado con un endpoint inalcanzable): errores específicos por campo, resumen enfocado, y mensaje de fallo
  honesto sin simular el envío.
- Filtros de actividades: probados con entradas temporales (ya eliminadas).
- Con `PUBLIC_SITE_URL` de prueba: canonical, `sitemap-index.xml` y `robots.txt` correctos.
- Contraste calculado para los pares de color de texto: todos ≥ 4,5:1.
- Sin JavaScript: el HTML generado contiene todo el contenido; la compilación por defecto no incluye ninguna isla de React.

## Limitaciones reales

- No se probó con lector de pantalla ni se pasó una auditoría automática (axe o Lighthouse); el cumplimiento de WCAG 2.2 AA
  es el objetivo de diseño, no una certificación.
- La revisión visual se hizo en 360 px y en el ancho del panel (~1024 px); no se revisó una tableta ni pantallas muy anchas.
- El comportamiento sin JavaScript se comprobó inspeccionando el HTML generado, no desactivando JavaScript en un navegador.
- El formulario no se probó contra un servicio real porque no hay uno configurado.
- Las actividades de prevención del suicidio y de DEVIDA no tienen fecha ni lugar confirmados, y las fichas no los muestran.

## Dirección visual (rediseño a partir de las referencias)

- Titulares gigantes en Anton y mayúsculas, enunciados en Figtree 800, etiquetas en DM Mono con punto de sección.
- Filas editoriales (etiqueta a la izquierda, contenido a la derecha), bandas de color a sangre y pie con frase gigante.
- Los colores de marca puros (coral y amarillo) se usan en superficies, formas y **texto grande** (>= 24 px, contraste
  >= 3:1). Todo texto pequeño usa variantes más oscuras (`--coral-deep`) o tintas con contraste >= 4,5:1.
- Las bandas «Arte / Juego / Encuentro» son estáticas (sin carrusel ni animación) y se anuncian como una sola imagen con texto alternativo.
