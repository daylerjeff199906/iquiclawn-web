import { getCollection, type CollectionEntry } from 'astro:content';

export type Actividad = CollectionEntry<'actividades'>;
export type Novedad = CollectionEntry<'novedades'>;

const byDateDesc = (a?: Date, b?: Date) => (b?.getTime() ?? 0) - (a?.getTime() ?? 0);

/** Actividades publicadas: con fecha primero (más recientes arriba), luego las que no tienen fecha. */
export async function getActividades(): Promise<Actividad[]> {
  const all = await getCollection('actividades', ({ data }) => !data.borrador);
  return all.sort((a, b) => {
    if (a.data.fecha && b.data.fecha) return byDateDesc(a.data.fecha, b.data.fecha);
    if (a.data.fecha) return -1;
    if (b.data.fecha) return 1;
    return a.data.titulo.localeCompare(b.data.titulo, 'es');
  });
}

export async function getNovedades(): Promise<Novedad[]> {
  const all = await getCollection('novedades', ({ data }) => !data.borrador);
  return all.sort((a, b) => byDateDesc(a.data.fecha, b.data.fecha));
}

const fmt = new Intl.DateTimeFormat('es-PE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Las fechas de los archivos Markdown son UTC; se formatean en UTC para evitar desfases de día. */
export const formatDate = (date: Date) => fmt.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** Texto de fecha de una actividad: fecha confirmada, texto libre o nada. */
export function fechaActividad(data: Actividad['data']): string | undefined {
  if (data.fecha) return formatDate(data.fecha);
  return data.fechaTexto;
}
