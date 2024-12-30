import React from "react";
import Image from "next/image";
import img from "@/assets/trainWithMountain.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const isLoggedIn = false;
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-screen relative">
        <Image
          src={img}
          alt="source-images"
          width={1000}
          height={1000}
          className=" object-cover object-center w-full h-screen"
        />
        <div className=" w-full absolute bottom-0">
          <div className=" bg-gradient-to-br from-indigo-500 to-indigo-500/30 backdrop-blur-md h-fit md:w-[60%] w-[90%] m-auto rounded-t-3xl shadow-xl ">
            <div className=" w-full h-full space-y-7 p-8">
              <h1 className="text-center text-4xl md:text-6xl font-bold text-white">
                Welcome to our <br />
                <span className="text-stone-50 underline decoration-2 decoration-yellow-400">
                  Blogsdaily
                </span>
              </h1>
              <br />
              <p className=" text-gray-200 md:text-base text-sm text-center w-[80%] m-auto">
                this is a blog website for sharing information and knowledge
                about the world. you can read blog and create your own blog and
                share your knowledge with the world . read our blog and learn
                new things and share your knowledge with the world.
              </p>
              <div className=" w-full flex justify-center ">
                <Link href={isLoggedIn ? "/blogs" : "/login"}>
                  <Button className="bg-white text-indigo-600 font-bold py-3 px-12 rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition transform">
                    Get Started 👉
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
