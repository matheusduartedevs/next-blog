import { client } from "@/sanity/lib/client";

export async function getAllTags() {
  const query = `
        *[_type == "tag"] {
            name,
            slug,
            _id
        }
    `;

  const tags = client.fetch(query);
  return tags;
}
