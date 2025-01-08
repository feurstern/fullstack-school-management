import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring[1.5] ring-gray-300 text-xs px-2">
        <Image src="/search.png" width={32} height={32} alt="search icon" />
        <input
          className="w-[200px] p-2 bg-transparent outline-none"
          type="text"
          placeholder="search here ... "
        ></input>
      </div>
      {/* end of search bar */}

      {/* icon and users */}
      <div className="flex items-center gap-6 justify-end w-full ">
        <div className="bg-white roundeed-full w-7 h-7 flex items-center">
          <Image src="/message.png" width={32} height={32} alt="buble" />
        </div>

        <div className="relative bg-white roundeed-full w-7 h-7 flex items-center">
          <Image
            src="/announcement.png"
            width={32}
            height={32}
            alt="announcement"
          />
          {/* add the notification to show the number */}
          <div className="absolute rounded-full text-xs -top-3 -right-3 w-5 h-5 items-center justify-center bg-purplee-500 text-white">
            2
          </div>
        </div>
        <div className="flex flex-col p-2">
          <span className="text-xs leading-3 font-medium">Hatsune Miku</span>
          <span className="text[10px] text-gray-500 text-right">
            Software Developer
          </span>
        </div>
        <Image
          src="/avatar.png"
          className="rounded-full"
          alt="profile-avatar"
          width={36}
          height={36}
        />
      </div>
      {/* ennd of icon and useer */}
    </div>
  );
};

export default Navbar;
