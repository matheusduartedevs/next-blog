import HeaderPosts from "@/components/HeaderPost";
import { Post } from "@/interfaces/Post";
import { urlFor } from "@/sanity/lib/image";
import { getPost } from "@/services/getPost";
import { PortableText } from "next-sanity";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostPage = async ({ params }: PostPageProps) => {
  const post: Post = await getPost(params.slug);

  return (
    <div>
      <HeaderPosts title={post.title} />
      <div className="text-center">
        <span className={`${dateFont?.className} text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>

        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase bg-gray-950 border border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-justify max-w-2xl m-auto prose-heading:my-5 prose-heading:text-2xl prose-p:mb-5 prose-leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4">
          <PortableText
            value={post.body}
            components={myPortableTextComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

const myPortableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="Post" width={700} height={700} />
    ),
  },
};
