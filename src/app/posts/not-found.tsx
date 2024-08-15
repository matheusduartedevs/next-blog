import HeaderPosts from "@/components/HeaderPost";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <HeaderPosts title="404 - Page Not Found" />
      <div className="text-center">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
