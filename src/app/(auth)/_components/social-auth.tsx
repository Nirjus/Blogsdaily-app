import React from "react";
import Image from "next/image";
import { images } from "@/constants/imports";

const SocialAuth = () => {
  return (
    <div className=" flex justify-between space-x-10 items-center">
      <button className=" bg-gray-100 p-3 w-full border-2 active:bg-gray-50 active:scale-95 transition-all duration-200 ease-in-out hover:bg-gray-100/70 justify-center border-stone-300 rounded-lg flex items-center space-x-3">
        <Image src={images.googleIcon} alt="google-icon" className=" w-5 h-5" />
        <p className=" font-semibold">Google</p>
      </button>
      <button className=" bg-gray-100 p-3 w-full justify-center border-2 active:bg-gray-50 active:scale-95 transition-all duration-200 ease-in-out hover:bg-gray-100/70 border-stone-300 rounded-lg flex items-center space-x-3">
        <Image src={images.githubIcon} alt="google-icon" className=" w-5 h-5" />
        <p className=" font-semibold">Github</p>
      </button>
    </div>
  );
};

export default SocialAuth;
