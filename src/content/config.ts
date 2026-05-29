import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title:                z.string(),
    description:          z.string().default(''),
    pubDate:              z.coerce.date(),
    category:             z.string(),
    keyword:              z.string().default(''),
    tags:                 z.array(z.string()).default([]),
    heroImage:            z.string().default(''),
    affiliateDisclosure:  z.boolean().default(true),
    featured:             z.boolean().default(false),
  }),
})

export const collections = { articles }
