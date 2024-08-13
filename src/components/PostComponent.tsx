import { Post } from "@/interfaces/Post";
import { Lilita_One } from "next/font/google";
import Link from "next/link";

type Props = {
  post: Post;
};

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = Lilita_One({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <div className="mb-8 p-4 border border-gray-900 rounded-md shadow-sm shadow-purple-950 hover:shadow-md hover:bg-gray-950">
      <Link href={`/posts/${post.slug.current}`}>
        <h2 className={`${font.className} text-2xl text-slate-300`}>
          {post.title}
        </h2>
        <p className={`${dateFont.className} my-2 text-purple-800`}>
          {new Date(post.publishedAt).toDateString()}
        </p>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
      </Link>

      <div>
        {post.tags.map((tag) => (
          <span
            key={tag._id}
            className="mr-2 p-1 rounded-sm text-sm lowercase bg-gray-950 border border-gray-900"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
