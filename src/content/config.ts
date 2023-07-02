import { defineCollection, z } from 'astro:content';

// const blog = defineCollection({
//     // Type-check frontmatter using a schema
//     schema: z.object({
//         title: z.string(),
//         description: z.string(),
//         // Transform string to Date object
//         pubDate: z
//             .string()
//             .or(z.date())
//             .transform((val) => new Date(val)),
//         updatedDate: z
//             .string()
//             .optional()
//             .transform((str) => (str ? new Date(str) : undefined)),
//         heroImage: z.string().optional(),
//     }),
// });


const work = defineCollection({
    // Type-check frontmatter using a schema
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

export const collections = {  work };
