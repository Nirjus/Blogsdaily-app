"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/common/logo";
import { images } from "@/constants/imports";
import ForgotPassForm from "./formComponent";

export default function ForgotPasswordPage() {
  return (
    <div>
      <div className=" flex max-md:flex-col justify-center items-center w-full min-h-screen ">
        <div className=" w-full md:w-[50%] p-5">
          <div className=" max-w-md m-auto">
            <div className=" w-fit mb-3">
              <Logo />
            </div>
            <h1 className=" text-3xl font-bold mb-2 text-gray-600">
              Forget password
            </h1>
            <p className=" text-gray-500 mb-10">
              put your email, we will send you verification link
            </p>
            <blockquote className="mt-6 border-l-2 bg-gray-300/50 border-l-gray-400 p-2 pl-6 text-stone-500 italic">
              <ul className=" list-disc pl-5">
                <li>this is a secure way to reset your password,</li>
                <li>verification link will send to your email</li>
                <li>link will only valid for 10 seconds.</li>
              </ul>
            </blockquote>
          </div>
          <ForgotPassForm />
          <div className=" flex items-center max-w-md m-auto space-x-3 my-10">
            <div className=" border border-gray-300 w-full" />
            <p className="whitespace-nowrap text-sm text-gray-500">or</p>
            <div className=" border border-gray-300 w-full" />
          </div>
          <p className=" text-center mt-6 text-gray-500 text-sm ">
            go back to{" "}
            <span className=" text-indigo-500 font-semibold">
              <Link href={"/login"}>Sign In</Link>
            </span>
          </p>
        </div>
        <div className=" w-full md:w-[50%] relative flex-shrink-0">
          <Image
            src={images.loginImage}
            alt="login-pic"
            className=" object-cover w-full sm:h-screen "
          />
        </div>
      </div>
    </div>
  );
}
