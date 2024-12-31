import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogsdaily",
  description: "A Blogsdaily with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function SingleBlogPage() {
  return (
    <div className=" w-full min-h-screen h-auto">
      <div className=" bg-white max-w-7xl m-auto p-5 pt-20">
        <h1>Blog Page</h1>
      </div>
    </div>
  );
}
