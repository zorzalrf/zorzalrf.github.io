import { z, defineCollection } from 'astro:content';

const recursosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Equipo Zorzal RF'),
    tags: z.array(z.string()).optional(),
    category: z.enum(['Iniciación / Primeros Pasos', 'SDR Avanzado', 'Antenas y Cables', 'Decodificación', 'Guías de Dispositivos', 'Tecnología Aeronáutica', 'General', 'Airframes']).default('General'),
    difficulty: z.enum(['Principiante', 'Intermedio', 'Avanzado', 'Experto']).default('Principiante'),
    readingTime: z.number().default(5),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  recursos: recursosCollection,
};
