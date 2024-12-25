import BlogCard from "@/components/blogs/blog-card";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/mock-data";
import Link from "next/link";
import React from "react";

const ResentPost = () => {
  return (
    <div className=" w-full min-h-screen h-auto">
      <div className=" bg-white max-w-7xl m-auto pt-20 p-5">
        <div className=" flex md:flex-row flex-col items-center justify-between">
          <h1 className=" md:text-3xl text-2xl font-bold ">Our Resent Posts</h1>
          <Link href={"/blogs"}>
            <Button className=" bg-indigo-500 hover:bg-indigo-400 px-8">
              View All
            </Button>
          </Link>
        </div>
        {/* Posts */}
        <div className=" w-full mt-10">
          <div className=" hidden md:grid w-full m-auto grid-cols-2 md:gap-10 gap-5">
            <img
              src={blogs[4].image}
              alt={blogs[4].title}
              className=" w-full rounded-2xl m-auto"
            />
            <div className=" relative space-y-6 p-4 ml-auto">
              <div className=" flex items-center gap-10">
                <p className=" font-bold text-lg text-gray-700">
                  {blogs[4].category}
                </p>
                <p className=" text-gray-500 ">{blogs[4].dateCreated}</p>
              </div>
              <h1 className=" text-2xl font-bold italic">{blogs[4].title}</h1>
              <p className=" text-base text-gray-500 text-justify tracking-wide">
                {blogs[4].description}
              </p>
              <Button className=" shadow-xl absolute bottom-0 bg-white border text-indigo-500 border-indigo-500 hover:bg-indigo-100 px-10">
                Read more
              </Button>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 ">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResentPost;
