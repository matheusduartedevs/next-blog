import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-slate-950 text-amber-50 selection:bg-purple-500`}
      >
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">{children}</main>
      </body>
    </html>
  );
}
