import HeaderPosts from "@/components/HeaderPost";
import { Tag } from "@/interfaces/Tag";
import { getAllTags } from "@/services/getAllTags";
import Link from "next/link";

const TagsPage = async () => {
  const tags: Tag[] = await getAllTags();

  return (
    <div>
      <HeaderPosts title="Tags" />

      <div>
        {tags.length > 0 &&
          tags.map((tag) => (
            <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase bg-gray-950 border border-gray-900 text-purple-500">
                #{tag.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TagsPage;
