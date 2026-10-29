import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoriaIds, tipoNovedadIds } from './data/categorias';

// Los archivos que empiezan por "_" (como _plantilla.md) no se publican.
const pattern = '**/[^_]*.{md,mdx}';

const fuente = z.object({
  titulo: z.string(),
  url: z.url().optional(),
});

const actividades = defineCollection({
  loader: glob({ base: './src/content/actividades', pattern }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string().max(240),
      categoria: z.enum(categoriaIds),
      /** Solo cuando la fecha esté confirmada. */
      fecha: z.coerce.date().optional(),
      /** Texto libre cuando solo se conoce el año o el periodo (p. ej. "2019"). */
      fechaTexto: z.string().optional(),
      lugar: z.string().optional(),
      estado: z.enum(['realizada', 'programada']).optional(),
      imagen: image().optional(),
      imagenAlt: z.string().optional(),
      galeria: z
        .array(z.object({ imagen: image(), alt: z.string(), credito: z.string().optional() }))
        .default([]),
      creditos: z.string().optional(),
      fuentes: z.array(fuente).default([]),
      relacionadas: z.array(z.string()).default([]),
      destacada: z.boolean().default(false),
      borrador: z.boolean().default(false),
    }),
});

const novedades = defineCollection({
  loader: glob({ base: './src/content/novedades', pattern }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string().max(240),
      fecha: z.coerce.date(),
      tipo: z.enum(tipoNovedadIds),
      imagen: image().optional(),
      imagenAlt: z.string().optional(),
      creditos: z.string().optional(),
      fuentes: z.array(fuente).default([]),
      destacada: z.boolean().default(false),
      borrador: z.boolean().default(false),
    }),
});

export const collections = { actividades, novedades };
