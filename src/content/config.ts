import {z, defineCollection} from "astro:content"

const repository_type_z = z.enum(['GIT'])
const repository_location_z = z.enum(['GITHUB'])

const projects_collection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repository_page_url: z.string(),
    repository_type: repository_type_z,
    repository_location: repository_location_z,
  })
})

export const collections = {
  projects: projects_collection,
}
