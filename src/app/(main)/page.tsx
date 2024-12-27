import React from "react";
import { Metadata } from "next";
import About from "./about";
import Hero from "./Hero";
import ResentPost from "./resent-posts";
import Subscribe from "./subscribe";

export const metadata: Metadata = {
  title: "Blog App",
  description: "A blog app with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResentPost />
      <Subscribe />
    </>
  );
}
