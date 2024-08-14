import HeaderPosts from "@/components/HeaderPost";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/interfaces/Post";
import { getPostsByTag } from "@/services/getPostsByTag";

interface TagPageProps {
  params: {
    slug: string;
  };
}

const TagPage = async ({ params }: TagPageProps) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div>
      <HeaderPosts title={`#${params.slug}`} tags />
      <div>
        {posts.length > 0 &&
          posts.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default TagPage;
