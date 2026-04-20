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
