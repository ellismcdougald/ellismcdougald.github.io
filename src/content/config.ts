import { z, defineCollection } from "astro:content";

const site = defineCollection({ schema: z.any() });

export const collections = {
  site,
};
