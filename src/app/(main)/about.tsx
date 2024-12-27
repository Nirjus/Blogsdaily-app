import Image from "next/image";
import React from "react";
import img from "@/assets/laptops-computers.jpg";
const About = () => {
  return (
    <div className=" w-full bg-white h-screen ">
      <div className="max-w-7xl h-full mx-auto p-5 ">
        <div className=" relative flex w-full h-full justify-center items-center">
          <Image
            src={img}
            alt="computer-image"
            width={1000}
            height={1000}
            className=" ml-auto xl:h-[500px] md:h-[400px] h-[300px] object-cover rounded-2xl"
          />
          <div className="flex-1 lg:w-[50%] md:w-[60%] p-5 bg-white shadow-lg rounded-2xl w-[90%] absolute bottom-0 left-0 ">
            <h1 className="  text-2xl font-bold text-center md:text-left md:text-3xl">
              Are interested to grow business 🚀 and side hustle?
            </h1>
            <p className="my-5 md:text-base italic text-gray-500 text-sm ">
              We are all about helping people grow and develop their skills,
              knowledge and personal development. We also help people to start
              and grow their business.
            </p>
            <p className="my-5 md:text-base text-sm text-gray-600 ">
              We believe that self development is the key to success in any area
              of life. And with the right mindset, knowledge and skills, anyone
              can achieve their goals and live a fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
