import { Metadata } from "next";
import React from "react";
import LoginPage from "./loginPage";

export const metadata: Metadata = {
  title: "Blog App - Login",
  description: "A blog app with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function Login() {
  return (
    <div className=" w-full min-h-screen bg-gray-200">
      <LoginPage />
    </div>
  );
}
