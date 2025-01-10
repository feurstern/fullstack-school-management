import React from "react";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../constant/index";
const Menu = () => {
  return (
    <div>
      menu :
      <div className="">
        {menuItems.map((x) => (
          <div className="" key={x.title}>
            <span> {x.title}</span>
            {x.items.map((z) => (
              <Link href={z.href} key={z.label} className="flex items-center justify-center lg:justify-staaart gap-4 text-gray-500 py-2">
                <Image alt={z.label} src={z.icon} width={20} height={20} />
                
                {/* it  default it's hidden  */}
                <span className="hidden lg:block">{z.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
