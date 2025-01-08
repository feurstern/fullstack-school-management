import React from "react";
import Image from "next/image";
const UserCard = ({ typeRole, age }: { typeRole: string; age: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purpleBg even:bg-yellowLightBg p-4 flex-1 min-[130px]">
      UserCard
      <div className="flex justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounde-full text-green-600">
          2025/25
        </span>
        <Image alt="more image" src="/more.png" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold">2311</h1>
      <h2 className="capitalize text-sm font-medium text-gray-200">
        {typeRole}
      </h2>
      <h3>{age}</h3>
    </div>
  );
};

export default UserCard;
