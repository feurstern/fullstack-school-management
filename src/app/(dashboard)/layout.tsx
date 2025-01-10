import Link from "next/link";
import Image from "next/image";
import Menu from "../components/menu";
import Navbar from "../components/navbar";

export default function dashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  bg-red-200 p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          Home
          {/* lg : display : block  */}
          <span className="hidden lg:block">Schatz Academy</span>
          {/* <Image src={"https://static.wikitide.net/houkai2ndwiki/0/06/MiHoYo_O_logo.webp"} width={32} height={32} /> */}
        </Link>
        <Menu />
      </div>
      right side
      <div className="w-[86% ] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200  overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
