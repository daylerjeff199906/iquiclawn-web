export const categorias = {
  'clown-comunitario': 'Clown comunitario',
  'clown-hospitalario': 'Clown hospitalario',
  formacion: 'Formación y talleres',
  'cultura-comunitaria': 'Cultura y comunidad',
} as const;

export type CategoriaId = keyof typeof categorias;
export const categoriaIds = Object.keys(categorias) as [CategoriaId, ...CategoriaId[]];

export const tiposNovedad = {
  noticia: 'Noticia',
  comunicado: 'Comunicado',
  anuncio: 'Anuncio',
} as const;
export type TipoNovedad = keyof typeof tiposNovedad;
export const tipoNovedadIds = Object.keys(tiposNovedad) as [TipoNovedad, ...TipoNovedad[]];

/** Número mínimo de actividades para mostrar filtros por categoría. */
export const MIN_ACTIVIDADES_PARA_FILTROS = 6;
