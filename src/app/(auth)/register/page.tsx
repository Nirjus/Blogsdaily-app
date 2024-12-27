import { Metadata } from "next";
import React from "react";
import RegisterPage from "./registerPage";

export const metadata: Metadata = {
  title: "Blog App - Register",
  description: "A blog app with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function Register() {
  return (
    <div className=" w-full min-h-screen bg-gray-200">
      <RegisterPage />
    </div>
  );
}
