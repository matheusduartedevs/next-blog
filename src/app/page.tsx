import HeaderPosts from "@/components/HeaderPost";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/interfaces/Post";
import { getPosts } from "@/services/getPosts";

const Home = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <HeaderPosts title="Articles" />

      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
