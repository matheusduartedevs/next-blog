import { client } from "@/sanity/lib/client";

export async function getAllTags() {
  const query = `
        *[_type == "tag"] {
            name,
            slug,
            _id,
            "postCount": count(*[_type == "post" && references("tags", ^._id)])
        }
    `;

  const tags = client.fetch(query);
  return tags;
}
