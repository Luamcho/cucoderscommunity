import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    username: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    canonicalUrl: z.string().optional(),
});

const appsSchema = z.object({
    name: z.string(),
    id: z.string(),
    description: z.string().optional(),
    logo: z.string(),
    website: z.string().optional(),
    email: z.string().optional(),
    is_open_source: z.boolean().optional(),
    repository_url: z.string().optional(),
    twitter_username: z.string().optional(),
    telegram_username: z.string().optional(),
    dev_username: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    categories: z.array(z.string()),
    platforms: z.array(z.string())
});

const resourcesSchema = z.object({
    name: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
});

const eventsSchema = z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.string().transform(str => new Date(str)),
    endDate: z.string().transform(str => new Date(str)),
    location: z.string(),
    image: z.string().optional(),
    url: z.string(),
    virtual: z.boolean().optional(),
    presential: z.boolean().optional(),
    pubDate: z.string().transform(str => new Date(str)),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type AppSchema = z.infer<typeof appsSchema>;
export type resourcesSchema = z.infer<typeof resourcesSchema>;
export type eventsSchema = z.infer<typeof eventsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const appsCollection = defineCollection({ schema: appsSchema });
const resourcesCollection = defineCollection({ schema: resourcesSchema });
const eventsCollection = defineCollection({ schema: eventsSchema });

export const collections = {
    'blog': blogCollection,
    'apps': appsCollection,
    'resources': resourcesCollection,
    'events': eventsCollection,
}