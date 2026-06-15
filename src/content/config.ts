import { z, defineCollection } from 'astro:content';

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Equipo Zorzal RF'),
    tags: z.array(z.string()).optional(),
  }),
});

const catalogCollection = defineCollection({
  type: 'data', // Or 'content' if they have markdown descriptions
  schema: z.object({
    title: z.string(),
    category: z.enum(['Entrega Inmediata', 'Entrega en 30 días', 'Entrega en 45 días']),
    price: z.number().optional(),
    mercadoLibreUrl: z.string().url().optional(),
    idealUse: z.string().optional(),
    specs: z.array(z.string()),
    inStock: z.boolean().default(true),
  }),
});

export const collections = {
  tutorials: tutorialsCollection,
  catalog: catalogCollection,
};
