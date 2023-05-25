"use client";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      alt="Avatar"
      width="30"
      height="30"
      src={"/images/avatar.jpeg"}
    />
  );
};

export default Avatar;
