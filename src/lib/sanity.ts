import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: "v0ex5wdb",
    dataset: "production",
    apiVersion: "2024-03-11",
    // Set to `true` for production environments
    useCdn: false,

})