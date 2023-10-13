import { createClient } from "next-sanity";

export const client= createClient(
    {
    projectId: '52y8t1eo',
    dataset: 'production',
    useCdn:true,
    apiVersion:"2023-01-01"
    }
);