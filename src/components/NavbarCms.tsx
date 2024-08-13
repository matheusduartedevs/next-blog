import { Lilita_One } from "next/font/google";
import Link from "next/link";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const NavbarCms = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/" className="text-white">Voltar</Link>

      <div className={`${font.className} text-3xl text-amber-50`}>
        Dev
        <span className="text-purple-500">Blog</span>
      </div>
    </div>
  );
};

export default NavbarCms;
