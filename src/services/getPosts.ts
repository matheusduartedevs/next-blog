import { client } from "@/sanity/lib/client";

export async function getPosts() {
  const query = `
      *[_type == "post"] {
        title,
        slug,
        publishedAt,
        excerpt
      }
    `;

  const data = await client.fetch(query);
  return data;
}
