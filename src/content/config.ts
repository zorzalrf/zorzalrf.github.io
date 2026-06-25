import { z, defineCollection } from 'astro:content';

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Equipo Zorzal RF'),
    tags: z.array(z.string()).optional(),
    category: z.enum(['Iniciación / Primeros Pasos', 'SDR Avanzado', 'Antenas y Cables', 'Satélites y Espacio', 'Decodificación', 'Guías de Dispositivos', 'Tecnología Aeronáutica', 'General']).default('General'),
    difficulty: z.enum(['Principiante', 'Intermedio', 'Avanzado', 'Experto']).default('Principiante'),
    readingTime: z.number().default(5),
    featured: z.boolean().optional(),
  }),
});

const catalogCollection = defineCollection({
  type: 'data', // Or 'content' if they have markdown descriptions
  schema: z.object({
    title: z.string(),
    category: z.enum(['Entrega Inmediata', 'Entrega 30 días', 'Entrega 45 días']),
    price: z.number().optional(),
    mercadoLibreUrl: z.string().url().optional(),
    idealUse: z.string().optional(),
    specs: z.array(z.string()),
    inStock: z.boolean().default(true),
  }),
});

export const collections = {
  resources: resourcesCollection,
  catalog: catalogCollection,
};
