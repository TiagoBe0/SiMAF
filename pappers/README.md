# Artículos / Papers — SiMAF

Carpeta para alimentar el banner **"Artículo más reciente"** en la portada del sitio.

## Cómo usar

1. **Subir archivos aquí** (dentro de `pappers/`):
   - El PDF del artículo, p. ej. `article.pdf`
   - La imagen del abstract gráfico, p. ej. `graphical-abstract.png` (o `.jpg`)
   - Cualquier imagen adicional asociada

2. **Editar `manifest.js`** — este archivo es el "contrato" que consume la página.
   Actualizar al menos:
   - `pdf` → ruta al PDF (relativa a la raíz del repo, p. ej. `'pappers/article.pdf'`)
   - `abstract` → ruta a la imagen del abstract gráfico
   - `title_es` / `title_en` → título del artículo
   - `abstract_es` / `abstract_en` → resumen corto (2–3 oraciones)
   - `authors` → lista de autores (nombre + rol)
   - `venue`, `year`, `doi`, `arxiv` → metadatos

3. Recargar el sitio — el banner se renderiza automáticamente al inicio de la página de inicio.

## Placeholder

Si `abstract` apunta a un archivo que no existe, el banner muestra un marcador
en color navy con instrucciones; no se rompe.

## Formatos recomendados

| Campo | Formato | Nota |
|---|---|---|
| Abstract gráfico | PNG o JPG, 1200–2000 px lado largo | Se recorta a cover en el banner |
| PDF | PDF/A si es posible | Se abre en pestaña nueva |

## Archivos

```
pappers/
├── manifest.js         ← editar aquí los metadatos
├── article.pdf         ← subir aquí
├── graphical-abstract.png
└── README.md
```

## Sección "Novedades" (página Publicaciones)

Al inicio de la página **Publicaciones** se muestran como "Novedades" las
entradas de `ui_kits/website/Publications.jsx` que tengan `"news": true`.
Para cambiar qué artículos aparecen, agregar o quitar ese campo.

**Portada:** se busca automáticamente una imagen en
`ui_kits/website/img/miniatures/` con el nombre formado por las tres primeras
palabras del título, separadas por `_` (sin tildes), p. ej.
`Ultrafast_thermal_sintering.png` o `Dynamic_strength_of.png`.
Si no existe, se dibuja una portada genérica con el nombre de la revista.

## Carrusel "Nuevas publicaciones" (al lado de Líneas de investigación)

Se alimenta de `ui_kits/website/novedades.js`. Cada entrada tiene `image`, `title`,
`authors`, `venue`, `year`, `url`, `abstract_es` y `abstract_en`.

Para cargar la imagen de cada paper, subirla a `ui_kits/website/img/novedades/` con el
nombre indicado en `image`:

| Paper | Archivo |
|---|---|
| Ultrafast thermal sintering… | `ultrafast_sintering.png` |
| Fitting and validation of a hybrid interatomic potential… | `hybrid_potential.png` |
| Dynamic strength of iron… | `iron_inner_core.png` |
| Changes in microstructure and phonon thermal conductivity… | `lamellar_hea.png` |
| Atomic-scale control of domain wall motion… | `domain_wall.png` |
| Nearly full magnetization recovery… | `magnetization_recovery.png` |

La imagen se muestra entera (sin recortar) en un recuadro 16:10; si falta,
aparece una portada genérica. Para agregar un paper nuevo, copiar un bloque
en `novedades.js` y ponerlo primero.
