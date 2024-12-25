import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import React from "react";

const Subscribe = () => {
  return (
    <div className=" bg-indigo-500 w-full">
      <div className=" p-8 max-w-7xl m-auto">
        <h1 className=" mt-5 text-white md:text-3xl text-2xl font-bold text-center ">
          Subscribe to our news later
          <br />
          put your email here
        </h1>
        <div className="m-auto my-10 flex justify-center items-center">
          <div className=" bg-white w-96  p-5 rounded-l-md">
            <input
              type="text"
              name=""
              id=""
              placeholder="Put your email"
              className=" border-none bg-white outline-none w-full text-black"
            />
          </div>
          <Button className=" rounded-l-none p-8">
            <SendHorizonal />
          </Button>
        </div>
        <p className=" mb-5 text-white/70 text-center ">
          Stay updated with us and get the latest news
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
