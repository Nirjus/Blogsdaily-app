import React from "react";
import { Metadata } from "next";
import ForgotPasswordPage from "./ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Blogsdaily - forgot password",
  description: "A Blogsdaily with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function ForgotPassword() {
  return (
    <div className=" w-full min-h-screen bg-gray-200">
      <ForgotPasswordPage />
    </div>
  );
}
