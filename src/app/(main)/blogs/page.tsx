import BlogCard from "@/components/blogs/blog-card";
import { blogs } from "@/data/mock-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog App - Blogs",
  description: "A blog app with Next.js",
  keywords: ["blog", "news", "next.js"],
};

const BlogPage = () => {
  return (
    <div className=" w-full min-h-screen h-auto">
      <div className=" max-w-7xl m-auto p-5 bg-white pt-20 ">
        <div className=" mt-5 space-y-6 ">
          <p className=" uppercase text-center">Our Blogs</p>
          <h1 className=" md:text-4xl text-3xl font-bold text-gray-600 text-center">
            Find our all Blog&apos;s
          </h1>
          <h3 className=" md:text-base text-sm font-sans text-gray-600 text-center md:w-[60%] text-[90%] m-auto">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </h3>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
