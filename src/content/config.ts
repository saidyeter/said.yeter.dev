import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    schema: z.object({
        companyName: z.string(),
        companyLink: z.string(),
        companyLocation: z.string(),
        companyBusiness: z.string(),
        companyImage: z.string(),
        title: z.string(),
        jobType: z.string(),
        workType: z.string(),
        totalWorkTime: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        tags: z.string().array(),
        order: z.number()
    }),
});

const blogPost = defineCollection({
    schema: z.object({
        title: z.string(),
        desc: z.string(),
        date: z.string(),
        tags: z.string().array(),
        order: z.number()
    }),
});

export const collections = { work, blogPost };
