import { Lilita_One } from "next/font/google";
import Link from "next/link";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl text-amber-50`}>
            Dev
            <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <div>Dark Theme</div>
      </div>
    </div>
  );
};

export default Navbar;
