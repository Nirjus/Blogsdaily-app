import { Metadata } from "next";
import React from "react";
import VerifyAccountPage from "./verifyAccountPage";

export const metadata: Metadata = {
  title: "Blog App - Account Verify",
  description: "A blog app with Next.js",
  keywords: ["blog", "news", "next.js"],
};

export default function VerifyAccount() {
  return (
    <div className=" w-full min-h-screen bg-gray-200">
      <VerifyAccountPage />
    </div>
  );
}